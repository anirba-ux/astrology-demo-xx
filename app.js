// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const kundliRoutes = require("./routes/kundliRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/kundli", kundliRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
