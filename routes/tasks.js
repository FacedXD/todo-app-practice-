const express = require("express");
const Task = require("../models/task");
const router = express.Router();

// get: kunin ang lahat ng tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// post: magdagdag ng bagong task
router.post("/", async (req, res) => {
  try {
    const newTask = new Task({ text: req.body.text });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete: Burahin ang isang task gamit ang ID
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
