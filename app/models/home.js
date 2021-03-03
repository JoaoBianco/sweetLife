class produto {
  constructor(connection) {
    this._connection = connection;
  }
  getAll = (callback) => {
    this._connection.query("select * from produto", callback);
  };

  getFilter = (id, callback) => {
    this._connection.query(
      "select * from produto join produtoCategoria on produto.id = produtoCategoria.idProduto where produtoCategoria.idCategoria = ?",
      id,
      callback
    );
  };

  search = (query, callback) => {
    const queryString = `SELECT * FROM produto WHERE nome LIKE '%${query}%'`;
    this._connection.query(queryString.toString(), callback);
  };
}

module.exports = () => {
  return produto;
};
