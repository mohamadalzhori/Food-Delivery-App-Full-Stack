const express = require('express');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const db = require('./db'); // Import the database connection from db.js

const app = express();

var corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Import the models
const models = [
  require('./models/Coupon'),
  require('./models/FoodItem'),
  require('./models/FoodItemImage'),
  require('./models/FoodItemReview'),
  require('./models/Menu'),
  require('./models/AnOrder'),
  require('./models/OrderItem'),
  require('./models/Restaurant'),
  require('./models/RestaurantImage'),
  require('./models/RestaurantReview'),
  require('./models/User'),
  require('./models/TokenBlacklist')
];
models.forEach(model => model.createTable(db));



// Routers
app.use('/user', require('./routes/User'));







// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Student Management System');
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
