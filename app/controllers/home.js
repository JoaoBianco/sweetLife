const teste = require("../models/teste");

module.exports.index = (app, req, res) => {
  var connection = app.config.dbConnection;
  var teste = new app.app.models.teste(connection);

  teste.getAll((error, result) => {
    // console.log(result);
    res.render("home/index", { produto: result });
  });

};

module.exports.filter = (app, req, res) => {
  var connection = app.config.dbConnection();
  var teste = new app.app.models.teste(connection);

  teste.getFilter(req.params.id, function(error, result) {
    res.render("home/index", { produto: result})
  })
};
