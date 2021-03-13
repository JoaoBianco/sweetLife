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

      const client = new Object
      client.nome = req.body.nome
      client.sobrenome = req.body.sobrenome
      client.email = req.body.email
      client.senha = req.body.senha

      cadastrando.insertClient(client, function(error, result) {
        const idClient = result.insertId

        const endereco = new Object
        endereco.endereco = req.body.endereco
        endereco.bairro = req.body.bairro
        endereco.complemento = req.body.complemento
        endereco.numero = req.body.number

        cadastrando.insertAddress(endereco, function(error, result) {
          const idEndereco = result.insertId
          
          const cadd = new Object
          cadd.idclient = idClient
          cadd.idEndereco = idEndereco
          cadastrando.clientAddress(cadd, function(error, result){
            res.status(200).send({"result": true})
          })
        })
      })
    }else {
      res.status(200).send({"result": false})
    }
  })
};
