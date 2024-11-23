const express = require('express');
const router = express.Router();
// ** Import Validation Middleware
const validationMiddleware = require('../middlewares/Validation');

// ** Import UserSignUp DTO
const UserSignUpDto = require('../dto/UserSignUp.dto');

//------------ Importing Controllers ------------//
const AuthController = require('../controllers/authController');

// ** Optimized: Added Validation Middleware Pipe to validate the Request Body
router.post('/register', validationMiddleware(UserSignUpDto), AuthController.register);
router.post('/login', AuthController.login);
router.get('/verify/:token', AuthController.verify);
router.post('/resend', AuthController.resend);
router.post('/forgot', AuthController.forgotPassword);

module.exports = router;