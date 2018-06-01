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

// Products CRUD paths
app.get('/rest/products', async(req, res)=>{
  //res.send('We are products');
  let products = await Product.find(); // {name:"The Times"}
  res.json(products);
});

app.get('/rest/products/:id', async(req, res)=>{
  //res.send('We would get one product');
  // get the product from the db
  let product = await Product.findOne({_id: req.params.id});
  res.json(product);
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

app.put('/rest/products/:id', async(req, res)=>{
  //res.send('We would update a product');
  // get the product from the db
  let product = await Product.findOne({_id: req.params.id});
  // perform update
  let result = await product.update(req.body);
  if(result.ok){
    result = req.body;
  }
  res.json(result);
});

app.delete('/rest/products/:id', async (req, res)=>{
  //res.send('We would delete a product');
  // delete the product from the db
  let result = await Product.deleteOne({_id: req.params.id});
  res.json(result);
});


// Cart CRUD paths
app.post('/rest/cart', async(req, res)=>{
  // add a product to the cart (note that the CartMiddleware must already have run)
  let cart = await Cart.findOne({_id: req.session.cart});
  console.log('cart', cart);
  if(cart === null){ // This is a real bug. Haven't figured it out yet.
    console.error('Unhandled error. We should have a cart, but we only have the ID. Well just make a new one (with the id) then...', req.session.cart);
    cart = new Cart({_id: req.session.cart});
  }
  if(!cart.items){
    cart.items = [];
  }
  let found;
  if(cart.items.length > 0){
    // look for duplicate item
    found = cart.items.find(item => item.product == req.body.product);
  }
  if(found){
    // update existing cart item
    found.amount += req.body.amount;
  }else{
    // add new item if no duplicate
    cart.items.push({product: req.body.product, amount: req.body.amount});
  }
  // commit changes
  cart.save();
  // respond with cart
  res.json(cart);
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