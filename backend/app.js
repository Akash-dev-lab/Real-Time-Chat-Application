const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const userRoutes = require('./routes/user.routes.js');
const cors = require('cors')
const morgan = require('morgan')
const db = require('./db/db')
const app = express();
const cookieParser = require('cookie-parser')

db()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send('This is a test route');
});

module.exports = app