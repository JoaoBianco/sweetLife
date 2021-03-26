

module.exports.index = (app, req, res) => {
  var connection = app.config.dbConnection;
  var home = new app.app.models.home(connection);
  var carrinho = new app.app.models.carrinho(connection);
  home.getAll((error, result) => {
    const prod = result
    if (req.user) {
      carrinho.countCart(req.user.id, (error, result) => {
        if (error) {
          console.error(error);
        }else {
          res.render("home/index", { produto: prod, ncart: result });
        }
      })
    } else {
      res.render("home/index", { produto: result });
    }
  });
};

module.exports.filter = (app, req, res) => {
  var connection = app.config.dbConnection;
  var home = new app.app.models.home(connection);

  home.getFilter(req.params.id, function (error, result) {
    res.render("home/index", { produto: result });
  });
};

module.exports.search = (app, req, res) => {
  var connection = app.config.dbConnection;
  var home = new app.app.models.home(connection);

  home.search(req.params.query, function (error, result) {
    res.render("home/index", { produto: result });
  });
};
