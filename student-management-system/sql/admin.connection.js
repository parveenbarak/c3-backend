const mysql = require("mysql2");
require("dotenv").config();

const adminconnection = mysql.createConnection({
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "user_detail",
});

adminconnection.query(`
  CREATE TABLE IF NOT EXISTS admin(
  admin_id INT PRIMARY KEY AUTO_INCREMENT,
  admin_name VARCHAR(255) NOT NULL,
  admin_email VARCHAR(255) NOT NULL,
  admin_password VARCHAR(255) NOT NULL,
  school_id INT NOT NULL)
`);

module.exports = { adminconnection };
