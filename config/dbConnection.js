var mysql = require("mysql");

var connMySQL = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "sweet_life_db",
  });
};

module.exports = () => {
  return connMySQL;
};
