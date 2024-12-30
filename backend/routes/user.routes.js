const { Router } = require('express');
const userController = require('../controllers/user.controller.js');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware.js');

const router = Router();

router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    userController.createUserController);

router.post('/login',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    userController.loginController);

router.get('/profile', authMiddleware.authUser, userController.profileController);

module.exports = router;