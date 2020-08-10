const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const router = express.Router();

//Routes configuration
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const smsRoute = require('./routes/smsRoute');

// Configure the application to allow access from any Client's API REST IP Address;
app.use(cors());

// Configure the express to use JSON format
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRoute);
app.use('/sms', smsRoute);

module.exports = app;