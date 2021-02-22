// nova view?
module.exports.index = (app, req, res) => {
    var connection = app.config.dbConnection();
    var filtroCat = new app.app.models.filtroCat(connection);
    console.log(connection);
    filtroCat.getFilter((error, result) => {
      console.log(result);
      // nova view?
      res.render("home/index", { filtro: result });
    });
  };