

const createTableSQL = `
CREATE TABLE IF NOT EXISTS Student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  points INT
);
`;

module.exports = {
  createTable: (db) => {
    db.query(createTableSQL, (err, results) => {
      if (err) {
        console.error('Error creating Students table:', err);
      } else {
        console.log('Students table created successfully');
      }
    });
  },
};
