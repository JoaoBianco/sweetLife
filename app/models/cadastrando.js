class cadastrando {
  constructor(connection) {
    this._connection = connection;
  }
  insertClient = (client, callback) => {
    this._connection.query(`INSERT INTO cliente (nome, sobrenome, email, senha) VALUES ('${client.nome}', '${client.sobrenome}', '${client.email}', '${client.senha}')`, callback)
  };

  verifyEmail = (email, callback) => {
    this._connection.query(`SELECT email FROM cliente WHERE email = ${email}`, callback);
  };

  insertAddress = (endereco, callback) => {
    this._connection.query(`INSERT INTO endereco (rua, numero, bairro) values ('${endereco.endereco}', '${endereco.numero}', '${endereco.bairro}')`, callback)
  };

  clientAddress = (cadd, callback) => {
    this._connection.query(`INSERT INTO enderecocliente (idendereco, idcliente) VALUES ('${cadd.idendereco}', '${cadd.idclient}')`, callback)
  }

}

module.exports = () => {
  return cadastrando;
};
