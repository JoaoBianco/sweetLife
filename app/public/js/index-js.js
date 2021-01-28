let botao = document.getElementById("hamburguer-responsive");
let logo = document.querySelector(".logo");
let btn_burguer = document.getElementById("hamburguer-responsive");
let btn_close = document.getElementById("btn-close");

btn_close.addEventListener("click", () => {
  logo.className = "logo";
  btn_burguer.className = "fas fa-bars";

  x = document.getElementsByClassName("menu-responsive");
  y = document.getElementsByClassName("item-menu-responsive");
  z = document.getElementsByClassName("nav-responsive");
  w = document.getElementsByClassName("menu-principal-responsive");
  while (y.length > 0) {
    y[0].className = "item-menu";
  }
  while (x.length > 0) {
    x[0].className = "menu";
  }
  while (z.length > 0) {
    z[0].className = "nav";
  }
  while (w.length > 0) {
    w[0].className = "menu-principal";
  }
});

botao.addEventListener("click", () => {
  let x = document.getElementsByClassName("menu");
  let y = document.getElementsByClassName("item-menu");
  let z = document.getElementsByClassName("nav");
  let w = document.getElementsByClassName("menu-principal");

  logo.className = "hidden";
  btn_burguer.className = "hidden";

  while (y.length > 0) {
    y[0].className += "-responsive";
  }
  while (x.length > 0) {
    x[0].className += "-responsive";
  }
  while (z.length > 0) {
    z[0].className += "-responsive";
  }
  while (w.length > 0) {
    w[0].className += "-responsive";
  }
});
