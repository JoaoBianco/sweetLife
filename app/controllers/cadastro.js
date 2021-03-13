var bcrypt = require('bcryptjs');

module.exports.cadastrar = (app, req, res) => {
  res.render("cad_login/cadastro");
};

module.exports.cadastrando = (app, req, res) => {
  var connection = app.config.dbConnection;
  var cadastrando = new app.app.models.cadastrando(connection);

  cadastrando.verifyEmail(req.body.email, function(error, result) {

    if (result.length == 0) {

      var salt = bcrypt.genSaltSync(10);
      req.body.senha = bcrypt.hashSync(req.body.senha, salt);

      cadastrando.insertClient(req.body, function(error, result) {
        req.body.idclient = result.insertId

        cadastrando.insertAddress(req.body, function(error, result) {
          req.body.idEndereco = result.insertId

          cadastrando.clientAddress(req.body, function(error, result){
            res.status(200).send({"result": true})
          })
        })
      })
    }else {
      res.status(200).send({"result": false})
    }
  })
};
