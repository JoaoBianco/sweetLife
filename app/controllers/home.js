const teste = require("../models/teste");

module.exports.index = (app, req, res) => {
  var connection = app.config.dbConnection;
  var teste = new app.app.models.teste(connection);

  teste.getAll((error, result) => {
    res.render("home/index", { produto: result });
  });

};

module.exports.filter = (app, req, res) => {
  var connection = app.config.dbConnection;
  var teste = new app.app.models.teste(connection);

  teste.getFilter(req.params.id, function(error, result) {
    res.render("home/index", { produto: result})
  })
};

module.exports.search = (app, req, res) => {
  var connection = app.config.dbConnection;
  var teste = new app.app.models.teste(connection);

  teste.search(req.params.query, function(error, result) {
    res.render("home/index", { produto: result})
  })
};
