const express = require('express');
const router = express.Router();

// Import the home controller
const homeController = require('../controller/home_controller');

// Route for the home page
router.get('/', homeController.home);

// Use the comments router for handling user-related routes
router.use('/comments', require('./comment'));

// Use the views router for handling user-related routes
router.use('/views', require('./views'));

// Export the main router to be used in your application
module.exports = router;