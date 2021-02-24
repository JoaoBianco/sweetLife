module.exports = (app) => {
  app.get("/", (req, res) => {
    app.app.controllers.home.index(app, req, res);
  });

  app.get("/filter/:id", (req, res) => {
    app.app.controllers.home.filter(app, req, res);
  });
  
};
