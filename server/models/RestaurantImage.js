const createTableSQL = `
CREATE TABLE IF NOT EXISTS RestaurantImage (
    id INT AUTO_INCREMENT PRIMARY KEY,
    public_id VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    restaurant_id INT NOT NULL
  );
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating RestaurantImage table:', err);
      } else {
        console.log('RestaurantImage table created successfully');
      }
    });
  },
};
