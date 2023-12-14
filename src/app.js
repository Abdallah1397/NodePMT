const express = require("express");
const cors = require('cors');
const routes = require("./routes/index");
const database = require("./config/database");

// Create an instance of thr Express application
const app = express();
// Parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors());
// Create Base URL for routes
app.use("/api", routes);

// Start the server
const Port = 8000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
