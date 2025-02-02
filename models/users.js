// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const db = require('../db');  // Import database connection
// require('dotenv').config();

// // Register new user
// const registerUser = (email, password, callback) => {
//   bcrypt.hash(password, 10, (err, hashedPassword) => {
//     if (err) return callback(err);

//     const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
//     db.query(query, [email, hashedPassword], (err, result) => {
//       if (err) return callback(err);
//       callback(null, result);
//     });
//   });
// };

// // Find user by email
// const findUserByEmail = (email, callback) => {
//   const query = 'SELECT * FROM users WHERE email = ?';
//   db.query(query, [email], (err, results) => {
//     if (err) return callback(err);
//     callback(null, results[0]);
//   });
// };

// // Generate JWT token
// const generateToken = (userId) => {
//   return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// module.exports = { registerUser, findUserByEmail, generateToken };




const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');  // Import database connection
require('dotenv').config();

// Register new user
const registerUser = (email, password, callback) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return callback(err);

    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, hashedPassword], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  });
};

// Find user by email
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { registerUser, findUserByEmail, generateToken };