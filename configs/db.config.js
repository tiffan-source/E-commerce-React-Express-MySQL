const mysql = require('mysql2');
require('dotenv').config({path : './.env'});

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password : process.env.DATABASE_PASSWORD
});

module.exports = connection;
