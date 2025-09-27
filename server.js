const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const {
    createServer
} = require('http');
const {
    Server
} = require('socket.io');
require('dotenv').config();

// Import routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const searchRoutes = require('./routes/search');
const priceRoutes = require('./routes/prices');
const wishlistRoutes = require('./routes/wishlist');
const alertRoutes = require('./routes/alerts');

// Import middleware
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

// Import services
const priceUpdateService = require('./services/priceUpdateService');
const notificationService = require('./services/notificationService');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

// Security middleware
app.use(helmet());
app.use(compression());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true
}));

// Body parsing middleware
app.use(express.json({
    limit: '10mb'
}));
app.use(express.urlencoded({
    extended: true
}));

// Logging middleware
app.use(morgan('combined'));

// Static files
app.use(express.static('public'));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sasta-finder', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('👤 User connected:', socket.id);

    socket.on('join-room', (userId) => {
        socket.join(`user-${userId}`);
        console.log(`👤 User ${userId} joined their room`);
    });

    socket.on('disconnect', () => {
        console.log('👤 User disconnected:', socket.id);
    });
});

// Make io accessible to routes
app.use((req, res, next) => {
    req.io = io;
    next();
});

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/wishlist', authMiddleware, wishlistRoutes);
app.use('/api/alerts', authMiddleware, alertRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/html.html');
});

// Error handling middleware
app.use(errorHandler);

// Start price update service
priceUpdateService.start();

// Start notification service
notificationService.start(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`🚀 Sasta Finder Backend running on port ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📊 MongoDB: ${process.env.MONGODB_URI || 'mongodb://localhost:27017/sasta-finder'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('✅ Process terminated');
        mongoose.connection.close();
    });
});

module.exports = app;
