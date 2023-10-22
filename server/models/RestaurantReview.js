const createTableSQL = `
CREATE TABLE IF NOT EXISTS RestaurantReview (
    id INT AUTO_INCREMENT PRIMARY KEY,
    review TEXT NOT NULL,
    rating INT,
    restaurant_id INT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id),
    FOREIGN KEY (user_id) REFERENCES User(id)
  );
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating RestaurantReview table:', err);
      } else {
        console.log('RestaurantReview table created successfully');
      }
    });
  },
};
