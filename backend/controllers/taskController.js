const Task = require("../models/Task");

// @desc Get all tasks (Admin : all  Users: assigned Tasks)
// @route GET /api/tasks/
// @access Private access 
const getTasks = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
// @desc Get  task by id 
// // @route GET /api/tasks/
// @access Private 
const getTasksById = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

// @desc create Task Details (admin only )
// @route PUT /api/tasks/:id
// @access  private (admin)
const createTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
// @desc update Task Details (admin only )
// @route PUT /api/tasks/:id
// @access  private (admin)
const updateTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
// @desc delete task (Admin Only)
// @route DELETE /api/tasks/:id
// @access Private (Admin)
const deleteTask = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
// @desc Update task Details
// @route PUT /api/tasks/:id
// @access Private 
const updateTaskStatus = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
// @desc update task checklist 
// @route PUT /api/tasks/:id/todo
// @access Private 
const updateTaskCheckList = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
// @desc Get all tasks (Admin : all  Users: assigned Tasks)
// @route GET /api/tasks/
// @access Private access 
const getDashboardData = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

// @desc Get all tasks (Admin : all  Users: assigned Tasks)
// @route GET /api/tasks/
// @access Private access 
const getUserDashboardData = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
module.exports = { getTasks, getTasksById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskCheckList, getDashboardData, getUserDashboardData }
