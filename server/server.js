const express = require('express');
const app = express();
const bodyParser = require('body-parser');

global.mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bilshoppen');
app.use(bodyParser.json());