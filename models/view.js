// Import the Mongoose library
const mongoose = require('mongoose');

// Define a schema for the "View" collection
const viewsSchema = new mongoose.Schema({
    visitorCount:  Number
}, {
    versionKey: false
});

// Create a Mongoose model named "View" based on the schema
const View = mongoose.model('View', viewsSchema);

// Export the "View" model to use it in other parts of the application
module.exports = View;
