const express = require('express');
const router = express.Router();

// Import the comments controller
const commentsController = require('../controller/comments_controller');

// Route for the comments page
router.get('/', commentsController.comments);

// Route for creating a comment
router.post('/create', commentsController.create);

// // Route for deleting the comment
// router.delete('/:commentId', commentsController.delete);

// Export the main router to be used in your application
module.exports = router;