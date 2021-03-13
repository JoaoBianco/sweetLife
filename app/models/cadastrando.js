class cadastrando {
  constructor(connection) {
    this._connection = connection;
  }
  insertClient = (client, callback) => {
    this._connection.query(`INSERT INTO cliente (nome, sobrenome, email, senha) VALUES ('${client.nome}', '${client.sobrenome}', '${client.email}', '${client.senha}')`, callback)
  };

  verifyEmail = (email, callback) => {
    this._connection.query("select email from cliente where email = ?", email, callback);
  };

  insertAddress = (endereco, callback) => {
    this._connection.query(`INSERT INTO endereco (rua, numero, bairro) values ('${endereco.endereco}', '${endereco.numero}', '${endereco.bairro}')`, callback)
  };

  clientAddress = (cadd, callback) => {
    this._connection.query(`INSERT INTO enderecocliente (idendereco, idcliente) VALUES ('${cadd.idendereco}', '${cadd.idcliente}')`, callback)
  }

}

module.exports = () => {
  return cadastrando;
};
