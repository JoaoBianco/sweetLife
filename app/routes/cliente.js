module.exports = (app) => {
  app.get("/cliente", (req, res) => {
    app.app.controllers.cliente.cliente(app, req, res);
  });
};
