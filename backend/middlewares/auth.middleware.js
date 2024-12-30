const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).send({ error: 'Unauthorized User' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({ email: decoded.email });

        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();
    } catch (error) {

        console.log(error)

        res.status(401).send({ error: 'Invalid token.' });
    }
};

module.exports = { authUser };
