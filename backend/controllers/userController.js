const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @desc Get all users  
// @route Get api/users/
// @access private (admin)
const getUsers = async (req, res) => {
    try {
        const users = await User.find({ role: "member" }).select("-password");
        // Add task counts to each user 
        const usersWithTaskCounts = await Promise.all(users.map(async (user) => {
            const pendingTask = await Task.countDocuments({ assignedTo: user._id, status: "Pending" });
            const inProgressTask = await Task.countDocuments({ assignedTo: user._id, status: "In Progress" });
            const completedTask = await Task.countDocuments({ assignedTo: user._id, status: "Completed" });
            return {
                ...user._doc,// Include all existing user  data ,
                pendingTask,
                inProgressTask,
                completedTask,
            };
        }))
        res.json({ usersWithTaskCounts });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


// @desc Get user by ID 
// @route Get api/users/:id
// @access private
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) {
            res.json.status(404).json({ message: "User not found" })
        }
        res.json(user);
    }
    catch (error) {
        return res.status(404).json({ message: "User not found" });
    }
};


// @desc Delete a user by ID 
// @route delete api/users/:id
// @access private (Admin)
const deleteUser = async (req, res) => { };
module.exports = { getUsers, getUserById, deleteUser };