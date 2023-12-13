const mongoose = require("mongoose");

// Conncet to MongoDB
mongoose
  .connect(
    "mongodb+srv://abdallahattallah:1311997@cluster0.xuydb5h.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB successfully"))
  .catch(() => console.log("Error connecting to the DB"));