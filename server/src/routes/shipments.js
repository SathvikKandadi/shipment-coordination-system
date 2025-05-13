const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const { auth } = require('../middleware/auth');

const prisma = new PrismaClient();

// Helper function to find an available driver
const findAvailableDriver = async () => {
  // Find all drivers
  const availableDrivers = await prisma.user.findMany({
    where: {
      role: 'driver'
    },
    include: {
      _count: {
        select: {
          shipments: {
            where: {
              status: {
                in: ['pending', 'processing', 'in_transit']
              }
            }
          }
        }
      }
    }
  });

  // Filter drivers with less than 10 active shipments
  const eligibleDrivers = availableDrivers.filter(
    driver => driver._count.shipments < 10
  );

  if (eligibleDrivers.length === 0) {
    return null;
  }

  // Return the driver with the least number of active shipments
  return eligibleDrivers.reduce((prev, current) => {
    return prev._count.shipments < current._count.shipments ? prev : current;
  });
};

// Get all shipments for a driver
router.get('/driver', auth, async (req, res) => {
  try {
    if (req.user.role !== 'driver') {
      return res.status(403).json({ error: 'Only drivers can access this endpoint' });
    }

    const shipments = await prisma.shipment.findMany({
      where: {
        driverId: req.user.id,
      },
      select: {
        id: true,
        trackingNumber: true,
        name: true,
        status: true,
        fromLocation: true,
        toLocation: true,
        estimatedDeliveryDate: true,
      },
    });

    // Format the location data
    const formattedShipments = shipments.map(shipment => ({
      ...shipment,
      fromLocation: {
        lat: parseFloat(shipment.fromLocation.lat),
        lng: parseFloat(shipment.fromLocation.lng),
        address: shipment.fromLocation.address
      },
      toLocation: {
        lat: parseFloat(shipment.toLocation.lat),
        lng: parseFloat(shipment.toLocation.lng),
        address: shipment.toLocation.address
      }
    }));

    res.json(formattedShipments);
  } catch (error) {
    console.error('Error fetching driver shipments:', error);
    res.status(500).json({ error: 'Failed to fetch shipments' });
  }
});

// Get all shipments for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const shipments = await prisma.shipment.findMany({
      where: {
        customerId: req.user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(shipments);
  } catch (error) {
    console.error('Error fetching shipments:', error);
    res.status(500).json({ error: 'Failed to fetch shipments' });
  }
});

// Create a new shipment
router.post('/', auth, async (req, res) => {
  try {
    const { name, fromLocation, toLocation, estimatedDeliveryDate, weight, category } = req.body;

    // Generate tracking number (TRK + YYMMDD + 6 random digits)
    const date = new Date();
    const yy = date.getFullYear().toString().slice(-2);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(100000 + Math.random() * 900000);
    const trackingNumber = `TRK${yy}${mm}${dd}${random}`;

    // Find an available driver
    const availableDriver = await findAvailableDriver();

    // Create the shipment with or without a driver
    const shipment = await prisma.shipment.create({
      data: {
        trackingNumber,
        name,
        status: availableDriver ? 'processing' : 'pending',
        fromLocation: {
          lat: fromLocation.lat,
          lng: fromLocation.lng,
          address: fromLocation.address,
        },
        toLocation: {
          lat: toLocation.lat,
          lng: toLocation.lng,
          address: toLocation.address,
        },
        estimatedDeliveryDate: new Date(estimatedDeliveryDate),
        weight: parseFloat(weight),
        category,
        customerId: req.user.id,
        driverId: availableDriver?.id || null,
      },
    });

    res.status(201).json(shipment);
  } catch (error) {
    console.error('Error creating shipment:', error);
    res.status(500).json({ error: 'Failed to create shipment' });
  }
});

// Get all shipments for admin
router.get('/all', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Only admins can access this endpoint' });
    }

    console.log('Fetching all shipments for admin...');
    const shipments = await prisma.shipment.findMany({
      include: {
        customer: {
          select: {
            username: true,
            email: true
          }
        },
        driver: {
          select: {
            username: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    console.log(`Found ${shipments.length} shipments`);
    res.json(shipments);
  } catch (error) {
    console.error('Error fetching all shipments:', error);
    res.status(500).json({ error: 'Failed to fetch shipments' });
  }
});

// Get a specific shipment by tracking number
router.get('/:trackingNumber', auth, async (req, res) => {
  try {
    const shipment = await prisma.shipment.findFirst({
      where: {
        trackingNumber: req.params.trackingNumber,
        customerId: req.user.id,
      },
    });

    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }

    res.json(shipment);
  } catch (error) {
    console.error('Error fetching shipment:', error);
    res.status(500).json({ error: 'Failed to fetch shipment' });
  }
});

// Update shipment status
router.put('/:id/status', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'processing', 'in_transit', 'delivered', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const shipment = await prisma.shipment.findUnique({
      where: { id: parseInt(id) },
    });

    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }

    if (shipment.driverId !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to update this shipment' });
    }

    // If the shipment is being marked as delivered or cancelled, try to assign pending shipments
    if (status === 'delivered' || status === 'cancelled') {
      const pendingShipments = await prisma.shipment.findMany({
        where: {
          status: 'pending',
          driverId: null,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });

      // Try to assign pending shipments to this driver
      for (const pendingShipment of pendingShipments) {
        const driverShipmentCount = await prisma.shipment.count({
          where: {
            driverId: req.user.id,
            status: {
              in: ['pending', 'processing', 'in_transit']
            }
          }
        });

        if (driverShipmentCount < 10) {
          await prisma.shipment.update({
            where: { id: pendingShipment.id },
            data: {
              driverId: req.user.id,
              status: 'processing'
            }
          });
        } else {
          break;
        }
      }
    }

    const updatedShipment = await prisma.shipment.update({
      where: { id: parseInt(id) },
      data: { status },
      select: {
        id: true,
        trackingNumber: true,
        name: true,
        status: true,
        fromLocation: true,
        toLocation: true,
        estimatedDeliveryDate: true,
      },
    });

    res.json(updatedShipment);
  } catch (error) {
    console.error('Error updating shipment status:', error);
    res.status(500).json({ error: 'Failed to update shipment status' });
  }
});

// Update shipment checkpoints and status
router.put('/:id/checkpoints', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { checkpoints, status } = req.body;

    // First check if the user is a driver
    if (req.user.role !== 'driver') {
      return res.status(403).json({ error: 'Only drivers can update shipment checkpoints' });
    }

    const shipment = await prisma.shipment.findUnique({
      where: { id: parseInt(id) },
      include: {
        checkpoints: true
      }
    });

    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }

    // Check if the shipment is assigned to any driver
    if (!shipment.driverId) {
      return res.status(400).json({ error: 'Shipment is not assigned to any driver' });
    }

    // First, delete existing checkpoints
    await prisma.shipmentCheckpoint.deleteMany({
      where: {
        shipmentId: parseInt(id)
      }
    });

    // Then create new checkpoints
    const updatedShipment = await prisma.shipment.update({
      where: { id: parseInt(id) },
      data: {
        status,
        checkpoints: {
          create: checkpoints.map(checkpoint => ({
            sequenceNumber: checkpoint.id,
            location: JSON.stringify(checkpoint.location),
            status: checkpoint.completed ? 'reached' : 'pending',
            reachedAt: checkpoint.completed ? new Date() : null,
            latitude: checkpoint.location.lat,
            longitude: checkpoint.location.lng
          }))
        }
      },
      include: {
        checkpoints: true
      }
    });

    // Parse the location strings back to objects in the response
    const shipmentWithParsedLocations = {
      ...updatedShipment,
      checkpoints: updatedShipment.checkpoints.map(checkpoint => ({
        ...checkpoint,
        location: JSON.parse(checkpoint.location),
        completed: checkpoint.status === 'reached'
      }))
    };

    res.json(shipmentWithParsedLocations);
  } catch (error) {
    console.error('Error updating shipment checkpoints:', error);
    res.status(500).json({ error: 'Failed to update shipment checkpoints' });
  }
});

module.exports = router; 