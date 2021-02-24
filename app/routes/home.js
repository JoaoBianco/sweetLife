module.exports = (app) => {
  app.get("/", (req, res) => {
    app.app.controllers.home.index(app, req, res);
  });

  app.get("/filter/:id", (req, res) => {
    app.app.controllers.home.filter(app, req, res);
  });  

  app.get("/search/:query", (req, res) => {
    app.app.controllers.home.search(app, req, res);
  });  

};
