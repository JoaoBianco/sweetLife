module.exports = (app) => {
  app.get("/login", (req, res) => {
    app.app.controllers.login.login(app, req, res);
  });
};
