const express = require('express');
const router = express.Router();

// Import the views controller
const viewsController = require('../controller/views_controller');

// Route for the views page
router.get('/', viewsController.views);

// // Route for creating a comment
// router.post('/create', viewsController.create);

// // Route for deleting the comment
// router.delete('/:viewId', viewsController.delete);

// Route for updating the product
router.post('/:viewId/update_visiter_count', viewsController.updateVisiterNo);

// Export the main router to be used in your application
module.exports = router;