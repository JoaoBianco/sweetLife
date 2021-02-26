const home = require("../models/home");

module.exports.index = (app, req, res) => {
  var connection = app.config.dbConnection;
  var home = new app.app.models.home(connection);

  home.getAll((error, result) => {
    res.render("home/index", { produto: result });
  });

};

module.exports.filter = (app, req, res) => {
  var connection = app.config.dbConnection;
  var home = new app.app.models.home(connection);

  home.getFilter(req.params.id, function(error, result) {
    res.render("home/index", { produto: result})
  })
};

module.exports.search = (app, req, res) => {
  var connection = app.config.dbConnection;
  var home = new app.app.models.home(connection);

  home.search(req.params.query, function(error, result) {
    res.render("home/index", { produto: result})
  })
};
