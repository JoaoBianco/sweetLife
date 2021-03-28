var app = require("./config/server");

app.listen(process.env.PORT || 3306, function () {
  console.log("Servidor Ativo!");
});

app.use(function (req, res) {
  res.status(404).render("error/404");
});
