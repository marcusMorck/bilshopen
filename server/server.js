const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const bcrypt = require('bcrypt');
const saltRounds = 10;

global.mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bilshoppen');
app.use(bodyParser.json());

// serve frontend files
app.use(express.static('../client/'));


const AccessManager = require('access-manager');
const accessManager = new AccessManager({
  mongoose: mongoose, // mongoose (connected)
  expressApp: app // an express app
});


// Models
const User = accessManager.models.user;
//Catch get request and send them to index.html, except /rest
app.get(/^((?!rest).)*$/, async(req, res)=>{
  res.sendFile(path.normalize(__dirname + '/../client/index.html'));
});

// start the express HTTP server
app.listen('3000', ()=>{
    console.log('bilshoppen server is running on port 3000');
  });