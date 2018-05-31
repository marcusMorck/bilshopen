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


// the cart is dependent on sessions, so...
const AccessManager = require('access-manager');
const accessManager = new AccessManager({
  mongoose: mongoose, // mongoose (connected)
  expressApp: app, // an express app
  sessionSchema: {
    loggedIn: {type:Boolean, default:false},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
  },
  userSchema: {
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    roles: [String],
    cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
  }
});


// Models
const Product = require('./models/product.js');

// the cart model needs to be a global as it is used in the cart middleware
global.Cart = require('./models/cart.js');

const User = accessManager.models.user;

// Middlewares
const CartMiddleware = require('./middlewares/cart-middleware.js');
app.use(CartMiddleware);

//Catch get request and send them to index.html, except /rest
app.get(/^((?!rest).)*$/, async(req, res)=>{
  res.sendFile(path.normalize(__dirname + '/../client/index.html'));
});


app.post('/rest/products', async(req, res)=>{
  //res.send('We would create a product');
  let product = await new Product(req.body);
  try{
    product.save();
    res.json(product);
  }catch(err){
    console.error(err);
    res.json(err);
  }
});

app.get('/rest/cart', async(req, res)=>{
  // read the cart (note that the CartMiddleware must already have run), populate the products
  let cart = await Cart.findOne({_id: req.session.cart}).populate("items.product");
  res.json(cart);
});

// start the express HTTP server
app.listen('3000', ()=>{
    console.log('bilshoppen server is running on port 3000');
  });