const userService = require('../services/user.service')
const userModel = require('../models/user.model')
const { validationResult } = require('express-validator')
const redisClient = require('../services/redis.service')

module.exports.createUserController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const user = await userService.createUser(email, password);

        const token = await user.generateJwtToken();

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports.loginController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password')

        if (!user) {
            return res.status(401).json({ errors: 'User not found' });
        }

        const isMatch = await user.validatePassword(password);

        if (!isMatch) {
            return res.status(401).json({ errors: 'Invalid credentials' });
        }

        const token = await user.generateJwtToken();

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports.profileController = async (req, res) => {
    console.log(req.user)
    res.status(200).json({user: req.user})
}