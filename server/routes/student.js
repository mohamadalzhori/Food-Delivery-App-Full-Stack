const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all student
router.get('/', async (req, res) => {
  try {
    const getAllstudentSQL = 'SELECT * FROM student';
    db.query(getAllstudentSQL, (err, results) => {
      if (err) {
        console.error('Error fetching student:', err);
        res.status(500).json({ error: 'An error occurred while fetching student.' });
      } else {
        res.json(results);
      }
    });
  } catch (err) {
    console.error('Error fetching student:', err);
    res.status(500).json({ error: 'An error occurred while fetching student.' });
  }
});

// POST a new student
router.post('/', async (req, res) => {
  const { username, password, points } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  const createStudentSQL = 'INSERT INTO student (username, password, points) VALUES (?, ?, ?)';
  const values = [username, password, points || null];

  db.query(createStudentSQL, values, (err, results) => {
    if (err) {
      console.error('Error creating student:', err);
      res.status(500).json({ error: 'An error occurred while creating the student.' });
    } else {
      res.json({ id: results.insertId });
    }
  });
});

module.exports = router;
