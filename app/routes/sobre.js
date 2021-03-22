module.exports = (app) => {
    app.get("/sobre", (req, res) => {
      app.app.controllers.sobre.sobre(app, req, res);
    });
  };
  