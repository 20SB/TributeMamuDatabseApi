const View = require("../models/view");

// Function to retrieve all views
module.exports.views = async function (req, res) {
    try {
        // Find all views in the database
        const foundViews = await View.find({});
        
        // Send the found views as a response
        res.send(foundViews);
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

// Function to create a new view
module.exports.create = async function (req, res) {
    try {
        // Create a new View instance based on the data from the request body
        const newView = new View({
            visitorCount: req.body.visitors
        });
        console.log("body",req.body);
        console.log(newView);

        // Save the new view to the database
        await newView.save();
        
        // Send a success message as a response
        res.send(`Visiter Count added successfully.${newView}`);
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
        const result = await View.deleteOne({ _id: req.params.viewId });

        // Check if the product was found and deleted
        if (result.deletedCount === 0) {
            // If not found, send a 404 Not Found response
            res.status(404).send({ message: "not found" });
        } else {
            // If found and deleted, send a success message
            res.send({ message: "deleted" });
        }
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};

// Function to update a product's quantity
module.exports.updateVisiterNo = async function(req, res) {
    const viewID = req.params.viewId;
    const quantityChange = 1;

    try {
        // Find the product by its ID
        const foundView = await View.findById(viewID);

        // Check if the product exists
        if (!foundView) {
            // If not found, send a 404 Not Found response
            return res.status(404).send({ message: "Product not found" });
        }

        // Calculate the new quantity based on the existing quantity and the change value
        const newQty = foundView.visitorCount + quantityChange;

        // Update the product's quantity in the database
        const updatedView = await View.findByIdAndUpdate(viewID, { visitorCount: newQty }, { new: true });

        // Send the updated product and a success message as a response
        res.send({
            view: updatedView,
            message: 'Updated successfully'
        });
    } catch (err) {
        // Handle any errors and send a 500 Internal Server Error response if an error occurs
        console.error("Error:", err);
        res.status(500).send(err);
    }
};
