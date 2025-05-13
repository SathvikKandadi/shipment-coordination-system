const { Router } = require('express');
const { PrismaClient } = require('../generated/prisma');
const { auth, isAdmin } = require('../middleware/auth');

const router = Router();
const prisma = new PrismaClient();

// List vehicles
router.get('/', auth, async (_req, res) => {
  try {
    const vehicles = await prisma.vehicle.findMany();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching vehicles' });
  }
});

// Add new vehicle
router.post('/', auth, isAdmin, async (req, res) => {
  try {
    const { plateNumber, model, capacity } = req.body;

    const vehicle = await prisma.vehicle.create({
      data: {
        plateNumber,
        model,
        capacity: parseFloat(capacity),
        status: 'available'
      }
    });

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Error creating vehicle' });
  }
});

// Update vehicle status
router.put('/:id', auth, isAdmin, async (req, res) => {
  try {
    const { status, currentLocation } = req.body;

    const vehicle = await prisma.vehicle.update({
      where: { id: parseInt(req.params.id) },
      data: {
        status,
        currentLocation
      }
    });

    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Error updating vehicle' });
  }
});

module.exports = router; 