const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

require('dotenv').config();

const db = require('./database/databaseConfig');

db.connect();

const schedulerRoute = require('./routes/schedulerRoute');

app.use(express.json());

app.use('/', schedulerRoute);

module.exports = app;