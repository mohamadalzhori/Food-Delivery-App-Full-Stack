const createTableSQL = `
CREATE TABLE IF NOT EXISTS Restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    isVeg BOOLEAN DEFAULT 0,
    address TEXT NOT NULL,
    ratings DECIMAL(3, 2) DEFAULT 0.00,
    numOfReviews INT DEFAULT 0,
    location GEOMETRY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating Restaurant table:', err);
      } else {
        console.log('Restaurant table created successfully');
      }
    });
  },
};
