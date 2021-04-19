const mysql = require('mysql2');

// Create connection and store in db
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'mysqlPassword1',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;
