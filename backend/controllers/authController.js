const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT Token 
const generateToken = (userId) => {
    return jwt.sign({ id: useId }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// @desc  Register a new user 
// @route POST api/auth/register
// @access public 
const register = async (req, res) => { };

// @desc  Login user 
// @route POST api/auth/login
// @access public 
const loginUser = async (req, res) => { };

// @desc  Update  user profile  
// @route PUT api/auth/profile
// @access private (JWT token)
const updateUserProfile = async (req, res) => { };

module.exports = { registerUser, loginUser, getUerProfile, updateUserProfile };
