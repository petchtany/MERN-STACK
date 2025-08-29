const express = require('express');
const router = express.Router();

const { createRegister, login } = require('../controllers/auth')

// @route POST localhost:8000/api/register
// @desc route register
// @access Public
router.post('/register',createRegister);


// @route POST localhost:8000/api/login
// @desc route login
// @access Public
router.post('/login', login);


module.exports = router;