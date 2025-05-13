const { Router } = require('express');
const { PrismaClient } = require('../generated/prisma');
const { auth } = require('../middleware/auth');

const router = Router();
const prisma = new PrismaClient();

// Get user's notifications
router.get('/', auth, async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: {
        userId: req.user.id
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Error fetching notifications' });
  }
});

// Mark notification as read
router.put('/:id/read', auth, async (req, res) => {
  try {
    const notification = await prisma.notification.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: {
        isRead: true
      }
    });

    res.json(notification);
  } catch (error) {
    console.error('Error updating notification:', error);
    res.status(500).json({ error: 'Error updating notification' });
  }
});

// Mark all notifications as read
router.put('/read-all', auth, async (req, res) => {
  try {
    await prisma.notification.updateMany({
      where: {
        userId: req.user.id,
        isRead: false
      },
      data: {
        isRead: true
      }
    });

    res.json({ message: 'All notifications marked as read' });
  } catch (error) {
    console.error('Error updating notifications:', error);
    res.status(500).json({ error: 'Error updating notifications' });
  }
});

module.exports = router; 