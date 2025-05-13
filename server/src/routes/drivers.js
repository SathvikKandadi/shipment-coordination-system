const { Router } = require('express');
const { PrismaClient } = require('../generated/prisma');
const { auth, isAdmin } = require('../middleware/auth');

const router = Router();
const prisma = new PrismaClient();

// List available drivers
const listDrivers = async (_req, res) => {
  try {
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

    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching drivers' });
  }
};

// Add new driver
const addDriver = async (req, res) => {
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

    res.status(201).json(driver);
  } catch (error) {
    res.status(500).json({ error: 'Error creating driver' });
  }
};

// Assign driver to shipment
const assignDriver = async (req, res) => {
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
    res.status(500).json({ error: 'Error assigning driver' });
  }
};

router.get('/', auth, listDrivers);
router.post('/', auth, isAdmin, addDriver);
router.put('/:id/assign', auth, isAdmin, assignDriver);

module.exports = router; 