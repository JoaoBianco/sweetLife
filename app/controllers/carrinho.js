module.exports.carrinho = (app, req, res) => {
  if (req.isAuthenticated()) {
    var connection = app.config.dbConnection;
    var carrinho = new app.app.models.carrinho(connection);

    carrinho.getMyCart(req.user.id, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        const listcart = result
        carrinho.countCart(req.user.id, (error, result) => {
          if (error) {
            console.error(error);
          }else {
            res.render("carrinho/carrinho", {cart: listcart, ncart: result});
          }
        })
      }
    })
  } else {
    res.redirect('/')
  }
};


module.exports.carrinhoInsert = (app, req, res) => {
  var connection = app.config.dbConnection;
  var carrinho = new app.app.models.carrinho(connection);

  req.body.idclient = req.user.id;

  carrinho.insertCarrinho(req.body, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      res.status(200).send({data: true})
    }
  });

};

module.exports.removeCarrinho = (app, req, res) => {
  var connection = app.config.dbConnection;
  var carrinho = new app.app.models.carrinho(connection);

  carrinho.removeCarrinho(req.body.id, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      res.status(200).send({data: true})
    }
  });

};
