const dados = document.querySelector("#meus-dados");
const dadosBotao = document.querySelector("#aside-dados");

dadosBotao.addEventListener("click", () => {
  dados.classList.toggle("esconder");
});
