const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Auth middleware - Token:', token ? 'Present' : 'Missing');

    if (!token) {
      return res.status(401).json({ error: 'Please authenticate.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    console.log('Auth middleware - Decoded token:', decoded);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!user) {
      console.log('Auth middleware - User not found');
      return res.status(401).json({ error: 'Please authenticate.' });
    }

    console.log('Auth middleware - User found:', { id: user.id, role: user.role });
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ error: 'Please authenticate.' });
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user?.role !== 'admin') {
    console.log('Admin check failed - User role:', req.user?.role);
    return res.status(403).json({ error: 'Access denied. Admin only.' });
  }
  next();
};

module.exports = { auth, isAdmin }; 