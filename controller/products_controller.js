const Product = require("../models/product");

// Function to retrieve all products
module.exports.products = async function (req, res) {
    try {
        // Find all products in the database
        const foundProducts = await Product.find({});
        
        // Send the found products as a response
        res.send(foundProducts);
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

// Function to create a new product
module.exports.create = async function (req, res) {
    try {
        // Create a new Product instance based on the data from the request body
        const newProduct = new Product({
            name: req.body.name,
            tribute: req.body.tribute,
            memory: req.body.memory,
            time: req.body.time,
        });

        // Save the new product to the database
        await newProduct.save();
        
        // Send a success message as a response
        res.send("New product added successfully.");
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

// Function to delete a product by its ID
module.exports.delete = async function (req, res) {
    try {
        // Attempt to delete a product by its ID
        const result = await Product.deleteOne({ _id: req.params.productId });

        // Check if the product was found and deleted
        if (result.deletedCount === 0) {
            // If not found, send a 404 Not Found response
            res.status(404).send({ message: "Product not found" });
        } else {
            // If found and deleted, send a success message
            res.send({ message: "Product deleted" });
        }
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

