module.exports.index = (app, req, res) => {
    var connection = app.config.dbConnection;
    var filtroCat = new app.app.models.filtroCat(connection);
    filtroCat.getFilter((error, result) => {
      res.render("home/index", { filtro: result });
    });
  };
