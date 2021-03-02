module.exports = (app) => {
  app.get("/carrinho", (req, res) => {
    app.app.controllers.carrinho.carrinho(app, req, res);
  });
};
