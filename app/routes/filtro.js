module.exports = (app) => {
    app.get("/filtro", (req, res) => {
        // nova view
      app.app.controllers.home.index(app, req, res);
    });
  };