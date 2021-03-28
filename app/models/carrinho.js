class carrinho {

  constructor(connection) {
    this._connection = connection;
  }

  insertCarrinho = (item, callback) => {
    this._connection.query(`INSERT INTO itempedido (quantidade, idProduto, idCliente) VALUES ('${item.quantidade}', '${item.idproduto}', '${item.idclient}')`, callback)
  };

  countCart = (id, callback) => {
    this._connection.query(`SELECT COUNT(idProduto) as countCart FROM itempedido WHERE idCliente = ${id}`, callback)
  }

  getMyCart = (id, callback) => {
    this._connection.query(`SELECT p.*, i.id AS idpedido, i.quantidade FROM produto p JOIN itempedido i ON i.idProduto = p.id JOIN cliente c ON c.id = i.idCliente WHERE c.id = ${id}`, callback)
  }

  removeCarrinho = (id, callback) => {
    this._connection.query(`DELETE FROM itempedido WHERE id = ${id}`, callback)
  }

}

module.exports = () => {
  return carrinho;
};
