const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "user_detail",
});

connection.query(`
  CREATE TABLE IF NOT EXISTS school(
  school_id INT PRIMARY KEY AUTO_INCREMENT,
  school_name VARCHAR(255) NOT NULL,
  school_address VARCHAR(255) NOT NULL)
`);

module.exports = { connection };
