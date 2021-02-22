module.exports = (app) => {
    app.post("/", (req, res) => {
        // nova view
      app.app.controllers.home.index(app, req, res);
    });
  };