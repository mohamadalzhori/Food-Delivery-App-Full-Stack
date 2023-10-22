const createTableSQL = `
CREATE TABLE IF NOT EXISTS FoodItemImage (
  id INT AUTO_INCREMENT PRIMARY KEY,
  food_item_id INT,
  public_id VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  FOREIGN KEY (food_item_id) REFERENCES FoodItem(id)
);
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating FoodItemImage table:', err);
      } else {
        console.log('FoodItemImage table created successfully');
      }
    });
  },
};
