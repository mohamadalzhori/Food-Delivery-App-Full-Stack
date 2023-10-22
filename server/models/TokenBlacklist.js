const createTableSQL = `
CREATE TABLE IF NOT EXISTS TokenBlacklist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    invalidated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating TokenBlacklist table:', err);
      } else {
        console.log('TokenBlacklist table created successfully');
      }
    });
  },
};
