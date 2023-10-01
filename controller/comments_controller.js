const Comment = require("../models/comment");

// Function to retrieve all comments
module.exports.comments = async function (req, res) {
    try {
        // Find all comments in the database
        const foundComments = await Comment.find({});
        
        // Send the found comments as a response
        res.send(foundComments);
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

// Function to create a new comment
module.exports.create = async function (req, res) {
    try {
        // Create a new Comment instance based on the data from the request body
        const newComment = new Comment({
            name: req.body.name,
            tribute: req.body.tribute,
            memory: req.body.memory,
            time: req.body.time,
        });

        // Save the new comment to the database
        await newComment.save();
        
        // Send a success message as a response
        res.send("New comment added successfully.");
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

// Function to delete a comment by its ID
module.exports.delete = async function (req, res) {
    try {
        // Attempt to delete a comment by its ID
        const result = await Comment.deleteOne({ _id: req.params.commentId });

        // Check if the comment was found and deleted
        if (result.deletedCount === 0) {
            // If not found, send a 404 Not Found response
            res.status(404).send({ message: "Comment not found" });
        } else {
            // If found and deleted, send a success message
            res.send({ message: "Comment deleted" });
        }
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

