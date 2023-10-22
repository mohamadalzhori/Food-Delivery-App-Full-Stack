const createTableSQL = `
CREATE TABLE IF NOT EXISTS AnOrder (
    id INT AUTO_INCREMENT PRIMARY KEY,
    deliveryInfo JSON NOT NULL,
    restaurant_id INT NOT NULL,
    user_id INT NOT NULL,
    paymentInfo JSON NOT NULL,
    paidAt DATETIME,
    itemsPrice DECIMAL(10, 2) NOT NULL,
    taxPrice DECIMAL(10, 2) NOT NULL,
    deliveryCharge DECIMAL(10, 2) NOT NULL,
    finalTotal DECIMAL(10, 2) NOT NULL,
    orderStatus VARCHAR(255) NOT NULL,
    deliveredAt DATETIME,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating Order table:', err);
      } else {
        console.log('Order table created successfully');
      }
    });
  },
};
