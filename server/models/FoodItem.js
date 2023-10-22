const createTableSQL = `
CREATE TABLE IF NOT EXISTS FoodItem (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
  description TEXT NOT NULL,
  ratings INT DEFAULT 0,
  stock INT NOT NULL DEFAULT 0,
  numOfReviews INT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  restaurant_id INT,
  FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
);
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating FoodItem table:', err);
      } else {
        console.log('FoodItem table created successfully');
      }
    });
  },
};
