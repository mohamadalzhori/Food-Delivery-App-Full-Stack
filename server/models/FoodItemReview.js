const createTableSQL = `
CREATE TABLE IF NOT EXISTS FoodItemReview (
  id INT AUTO_INCREMENT PRIMARY KEY,
  food_item_id INT,
  name VARCHAR(255) NOT NULL,
  rating INT NOT NULL,
  Comment TEXT NOT NULL,
  FOREIGN KEY (food_item_id) REFERENCES FoodItem(id)
);
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating FoodItemReview table:', err);
      } else {
        console.log('FoodItemReview table created successfully');
      }
    });
  },
};
