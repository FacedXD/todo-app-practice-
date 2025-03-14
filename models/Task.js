const mongoose = require("mongoose");

// Gumagawa tayo ng schema para sa Task
const TaskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true }, // Kailangan may "text" (description ng task)
    completed: { type: Boolean, default: false }, // May "completed" status (true/false)
  },
  { timestamps: true }
); // Nagdadagdag ng "createdAt" at "updatedAt" fields

// Export natin ito bilang "Task" model
module.exports = mongoose.model("Task", TaskSchema);
