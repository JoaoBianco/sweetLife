var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b2bdf5e20ca626",
  password: "36b97c49",
  database: "heroku_aba9054eba0552f",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Conectado ao banco");
});

module.exports = () => {
  return connection;
};
