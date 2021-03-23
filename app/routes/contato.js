module.exports = (app) => {
    app.get("/contato", (req, res) => {
      app.app.controllers.contato.contato(app, req, res);
    });
  };