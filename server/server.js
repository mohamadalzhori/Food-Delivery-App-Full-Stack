const express = require('express');
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
const studentModel = require('./models/student');
studentModel.createTable(db);

// Routers
const studentRouter = require('./routes/student');
app.use('/student', studentRouter);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Student Management System');
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
