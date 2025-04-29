const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getDashboardData, getUserDashboardData, getTasks, getTasksById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskCheckList } = require("../controllers/taskController")
const router = express.Router();

// Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); // get all tasks  (Admin: all , User: assigned )
router.get("/:id", protect, getTasksById); // Get task by ID
router.post("/", protect, adminOnly, createTask); // Create a Task (Admin only )
router.put("/:id", protect, adminOnly, updateTask); // Update  Task details
router.delete("/:id", protect, adminOnly, deleteTask); // Updtae  Task details
router.put("/:id/status", protect, updateTaskStatus); // Update Task status 
router.put("/:id/todo", protect, updateTaskCheckList); // Update Check List

module.exports = router;