// Import the Mongoose library
const mongoose = require('mongoose');

// Define a schema for the "Comment" collection
const commentSchema = new mongoose.Schema({
    // Define the "name" field as a string
    name: String,
    tribute: String,
    memory: String,
    time: String
}, {
    // Disable version key ("__v") in documents
    versionKey: false
});

// Create a Mongoose model named "Comment" based on the schema
const Comment = mongoose.model('Comment', commentSchema);

// Export the "Comment" model to use it in other parts of the application
module.exports = Comment;
