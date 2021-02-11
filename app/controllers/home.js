module.exports.index = (app, req, res) => {
  //var connection = app.config.dbConnection();
  //var teste = new app.app.models.noticiasDAO(connection);

  /*noticiasModel.get5UltimasNoticias((error, result) => {
  res.render("home/index", { noticias: result });

   });
   */
  // teste.getAll((error, result) => {
  //    res.render("home/index", { teste: result });
  res.render("home/index");
  //  console.log(result);
  //});
};
