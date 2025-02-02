// const mysql = require('mysql');
// require('dotenv').config();

// // MySQL Database Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',          // Replace with your MySQL username
//   password: '',          // Replace with your MySQL password
//   database: 'narivitt'   // Replace with your MySQL database name
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// module.exports = db;



const mysql = require('mysql');
require('dotenv').config();

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // Replace with your MySQL username
  password: '',          // Replace with your MySQL password
  database: 'narivitt'   // Replace with your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;