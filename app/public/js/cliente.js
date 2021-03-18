const dados = document.querySelector("#meus-dados");
const dadosBotao = document.querySelector("#aside-dados");
const pedidos = document.querySelector("#meus-pedidos");
const pedidosBotao = document.querySelector("#aside-pedidos");
const enderecos = document.querySelector("#meus-enderecos");
const enderecosBotao = document.querySelector("#aside-enderecos");

dadosBotao.addEventListener("click", () => {
  dados.classList.remove("esconder");
  pedidos.classList.add("esconder");
  enderecos.classList.add("esconder");
});

pedidosBotao.addEventListener("click", () => {
  dados.classList.add("esconder");
  pedidos.classList.remove("esconder");
  enderecos.classList.add("esconder");
});

enderecosBotao.addEventListener("click", () => {
  dados.classList.add("esconder");
  pedidos.classList.add("esconder");
  enderecos.classList.remove("esconder");
});
