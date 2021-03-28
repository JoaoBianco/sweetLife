var mysql = require("mysql");
require("dotenv/config");

var connection = mysql.createPool({ //Cria uma Pool ao invés de uma conection
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
})

connection.getConnection((err) => {
  if (err) throw err
})

module.exports = connection