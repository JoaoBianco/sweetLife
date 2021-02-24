module.exports.index = (app, req, res) => {
  var connection = app.config.dbConnection;
  var teste = new app.app.models.teste(connection);
  /*noticiasModel.get5UltimasNoticias((error, result) => {
  res.render("home/index", { noticias: result });
   });
   */
  //console.log(connection);
  teste.getAll((error, result) => {
    // console.log(result);
    res.render("home/index", { produto: result });
  });
  //res.render("home/index");
};
