class filtro {
    constructor(connection) {
      this._connection = connection;
    }
    getAll = (callback) => {
      this._connection.query("select * from produto join produtoCategoria on produto.id = produtoCategoria.idProduto where produtoCategoria.idCategoria = 1;", callback);
    };
  }
  
  module.exports = () => {
    return filtro;
  };