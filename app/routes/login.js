const passport = require("passport");

module.exports = (app) => {
  app.get("/login", (req, res) => {
    app.app.controllers.login.login(app, req, res);
  });

  app.post("/login", (req, res, next)=>{
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })(req, res, next)
  })

  app.get("/logout", (req, res) =>{
      req.logout();
      res.redirect("/");
  })


};
