const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/submit-order", (req, res) => {
    const order = req.body;
    
    fs.appendFile("orders.txt", JSON.stringify(order) + "\n", (err) => {
        if (err) {
            console.error("Error saving order:", err);
            return res.status(500).json({ message: "Error saving order" });
        }
        res.json({ message: "Order received successfully!" });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
