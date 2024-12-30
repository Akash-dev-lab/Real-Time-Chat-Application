const userModel = require('../models/user.model');

module.exports.createUser = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        email,
        password: hashedPassword,
    });

    return user;
};