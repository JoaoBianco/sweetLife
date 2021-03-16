module.exports.cliente = (app, req, res) => {
  if (req.isAuthenticated()) {
    res.render("pagina_cliente/cliente");
  } else {
    res.status(404).render("error/404");
  }
};
