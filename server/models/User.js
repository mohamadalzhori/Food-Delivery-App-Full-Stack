const createTableSQL = `
CREATE TABLE IF NOT EXISTS User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  passwordConfirm VARCHAR(255) NOT NULL,
  avatarPublicId VARCHAR(255) NOT NULL,
  avatarUrl VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  passwordChangedAt TIMESTAMP,
  active BOOLEAN DEFAULT 1,
  passwordResetToken VARCHAR(255),
  passwordResetExpires TIMESTAMP
);
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating User table:', err);
      } else {
        console.log('User table created successfully');
      }
    });
  },
};
