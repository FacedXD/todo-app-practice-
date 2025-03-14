const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// 📌 Import at gamitin ang task routes
const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes); // Ginagamit ang routes sa "/tasks"

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
