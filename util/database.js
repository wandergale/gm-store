require('dotenv').config()

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'store',
  password: process.env.DATABASE_KEY
});

module.exports = pool.promise();