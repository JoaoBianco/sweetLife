module.exports = (app) => {
  app.get("/formulario_inclusao_noticia", (req, res) => {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
  });

  app.post("/noticicas/salvar", (req, res) => {
    let noticia = req.body;

    req.assert("titulo", "Titulo eh obrigatorio").notEmpty();
    req.assert("resumo", "Resumo eh obrigatorio").notEmpty();
    req
      .assert("resumo", "Resumo deve conter entre 10 e 100 caracteres")
      .len(10, 100);
    req.assert("autor", "Autor eh obrigatorio").notEmpty();
    req
      .assert("data_noticia", "Data eh obrigatorio")
      .notEmpty()
      .isDate({ format: "YYYY-MM-DD" });
    req.assert("noticia", "Noticia eh obrigatorio").notEmpty();

    let erros = req.validationErrors();
    if (erros) {
      res.render("admin/form_add_noticia", {
        validacao: erros,
        noticia: noticia,
      });
      return;
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
      res.redirect("/noticias");
      //redirect por causa do POST
    });
  });
};
