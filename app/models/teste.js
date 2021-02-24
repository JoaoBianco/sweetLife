/*class NoticiasDAO {
  constructor(connection) {
    this._connection = connection;
  }

  getNoticias = (callback) => {
    this._connection.query(
      "select * from noticias order by data_criacao desc",
      callback
    );
  };

  getNoticia = (id_noticia, callback) => {
    let id_da_noticia = id_noticia.id_noticia;
    this._connection.query(
      "select * from noticias where id_noticia = " + id_da_noticia,
      callback
    );
  };

  salvarNoticia = (noticia, callback) => {
    this._connection.query("insert into noticias set ?", noticia, callback);
  };

  get5UltimasNoticias = (callback) => {
    this._connection.query(
      "select * from noticias order by data_criacao desc limit 5",
      callback
    );
  };
}

module.exports = () => {
  return NoticiasDAO;
};
*/

class produto {
  constructor(connection) {
    this._connection = connection;
  }
  getAll = (callback) => {
    this._connection.query("select * from produto", callback);
  };
  
  getFilter = (id, callback) => {
    this._connection.query("select * from produto join produtoCategoria on produto.id = produtoCategoria.idProduto where produtoCategoria.idCategoria = ?", id, callback);
  };
}

module.exports = () => {
  return produto;
};
