const createTableSQL = `
CREATE TABLE IF NOT EXISTS Coupon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    couponName VARCHAR(255) NOT NULL,
    subTitle VARCHAR(255) NOT NULL,
    minAmount DECIMAL(10, 2) NOT NULL,
    maxDiscount DECIMAL(10, 2),
    discount DECIMAL(10, 2) NOT NULL,
    details TEXT NOT NULL,
    expire DATE NOT NULL,
    UNIQUE (couponName)
  );
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating Coupon table:', err);
      } else {    
        console.log('Coupon table created successfully');
      }
    });
  },
};
