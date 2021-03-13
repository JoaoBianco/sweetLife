module.exports = (app) => {
  app.get("/cadastro", (req, res) => {
    app.app.controllers.cadastro.cadastrar(app, req, res);
  });

  app.post("/cadastro", (req, res) => {
    app.app.controllers.cadastro.cadastrando(app, req, res);
  })
};
