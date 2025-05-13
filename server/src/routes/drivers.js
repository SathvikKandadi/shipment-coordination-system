const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const { auth, isAdmin } = require('../middleware/auth');

const prisma = new PrismaClient();

// List available drivers
router.get('/', auth, async (req, res) => {
  try {
    console.log('Fetching drivers...');
    const drivers = await prisma.user.findMany({
      where: {
        role: 'driver'
      },
      select: {
        id: true,
        username: true,
        email: true
      }
    });
    console.log('Drivers found:', drivers);
    res.json(drivers);
  } catch (error) {
    console.error('Error fetching drivers:', error);
    res.status(500).json({ error: 'Error fetching drivers' });
  }
});

// Add new driver
router.post('/', auth, isAdmin, async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const driver = await prisma.user.create({
      data: {
        username,
        email,
        password,
        role: 'driver'
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true
      }
    });

    // Assign up to 10 unassigned shipments to the new driver
    const unassignedShipments = await prisma.shipment.findMany({
      where: { driverId: null },
      orderBy: { createdAt: 'asc' },
      take: 10
    });

    for (const shipment of unassignedShipments) {
      await prisma.shipment.update({
        where: { id: shipment.id },
        data: {
          driverId: driver.id,
          status: 'processing'
        }
      });
    }

    res.status(201).json(driver);
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(500).json({ error: 'Error creating driver' });
  }
});

// Assign driver to shipment
router.put('/:id/assign', auth, isAdmin, async (req, res) => {
  try {
    const { shipmentId } = req.body;
    const driverId = parseInt(req.params.id);

    const shipment = await prisma.shipment.update({
      where: { id: shipmentId },
      data: {
        driverId,
        status: 'processing',
        lastUpdatedTimestamp: new Date()
      }
    });

    res.json(shipment);
  } catch (error) {
    console.error('Error assigning driver:', error);
    res.status(500).json({ error: 'Error assigning driver' });
  }
});

module.exports = router; 