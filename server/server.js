const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

global.mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bilshoppen');
app.use(bodyParser.json());

// serve frontend files
app.use(express.static('../client/'));
// start the express HTTP server
app.listen('3000', ()=>{
    console.log('bilshoppen server is running on port 3000');
  });