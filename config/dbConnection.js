var mysql = require("mysql");
//require("dotenv/config");

var poolMSQL = () => {
  var connection = mysql.createPool({ //Cria uma Pool ao invés de uma conection
    // host: process.env.DB_HOST_KEY,
    // user: process.env.DB_USER_KEY,
    // password: process.env.DB_PASSWORD_KEY,
    // database: process.env.DB_SCHEMA_KEY,
    host: "us-cdbr-east-03.cleardb.com",
    user: "b37f28773e88a7",
    password: "b47f205c",
    database: "heroku_4c3b64074699933",
  });
  return connection;
};

module.exports = () => {
  return poolMSQL;
};