const createTableSQL = `
CREATE TABLE IF NOT EXISTS OrderItem (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  image VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  fooditem_id INT NOT NULL,
  FOREIGN KEY (fooditem_id) REFERENCES FoodItem(id)
);
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating OrderItem table:', err);
      } else {    
        console.log('OrderItem table created successfully');
      }
    });
  },
};
