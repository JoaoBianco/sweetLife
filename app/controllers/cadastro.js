var bcrypt = require("bcryptjs");

module.exports.cadastrar = (app, req, res) => {
  if (!req.isAuthenticated()) {
    res.render("cad_login/cadastro");
  } else {
    res.status(404).render("error/404");
  }
};

module.exports.cadastrando = (app, req, res) => {
  var connection = app.config.dbConnection;
  var cadastrando = new app.app.models.cadastrando(connection);

  cadastrando.verifyEmail(req.body.email, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      if (result.length > 0) {
        res.status(200).send({ result: false });
      } else {
        var salt = bcrypt.genSaltSync(10);
        req.body.senha = bcrypt.hashSync(req.body.senha, salt);

        cadastrando.insertClient(req.body, function (error, result) {
          if (error) {
            console.error(error);
          } else {
            req.body.idclient = result.insertId;

            cadastrando.insertAddress(req.body, function (error, result) {
              if (error) {
                console.error(error);
              } else {
                req.body.idendereco = result.insertId;

                cadastrando.clientAddress(req.body, function (error, result) {
                  if (error) {
                    console.error(error);
                  } else {
                    res.status(200).send({ result: true });
                  }
                });
              }
            });
          }
        });
      }

    }

  });
};
