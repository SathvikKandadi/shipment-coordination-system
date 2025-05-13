const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const { auth } = require('../middleware/auth');

const prisma = new PrismaClient();

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

    res.json(shipments);
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
    const { name, fromLocation, toLocation, estimatedDeliveryDate } = req.body;

    // Generate tracking number (TRK + YYMMDD + 6 random digits)
    const date = new Date();
    const yy = date.getFullYear().toString().slice(-2);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(100000 + Math.random() * 900000);
    const trackingNumber = `TRK${yy}${mm}${dd}${random}`;

    const shipment = await prisma.shipment.create({
      data: {
        trackingNumber,
        name,
        status: 'pending',
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
        customerId: req.user.id,
      },
    });

    res.status(201).json(shipment);
  } catch (error) {
    console.error('Error creating shipment:', error);
    res.status(500).json({ error: 'Failed to create shipment' });
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

module.exports = router; 