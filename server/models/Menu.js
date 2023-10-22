const createTableSQL = `
CREATE TABLE IF NOT EXISTS Menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    category VARCHAR(255),
    fooditem_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id),
    FOREIGN KEY (fooditem_id) REFERENCES FoodItem(id)
);
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating Menu table:', err);
      } else {    
        console.log('Menu table created successfully');
      }
    });
  },
};
