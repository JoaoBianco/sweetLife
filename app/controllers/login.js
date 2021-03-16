module.exports.login = (app, req, res) => {
  if (!req.isAuthenticated()) {
    res.render("cad_login/login");
  } else {
    res.status(404).render("error/404");
  }
};
