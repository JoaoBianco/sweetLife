module.exports = (app) => {
  app.get("/carrinho", (req, res) => {
    app.app.controllers.carrinho.carrinho(app, req, res);
  });

  app.post("/carrinho", (req, res) => {
    app.app.controllers.carrinho.carrinhoInsert(app, req, res);
  });

  app.delete("/carrinho", (req, res) => {
    app.app.controllers.carrinho.removeCarrinho(app, req, res);
  });
};
