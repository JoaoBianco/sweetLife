const nav_slide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links-custom");
  const navLinks = document.querySelectorAll(".nav-links-custom-inner li");
  const body = document.querySelector("body");
  const navbar = document.querySelector(".navbar-custom");

  document.addEventListener("scroll", () => {
    let sticky = nav.offsetTop;
    if (window.pageYOffset >= sticky + 1) {
      navbar.classList.add("white-bg");
    } else {
      navbar.classList.remove("white-bg");
    }
  });

  burguer.addEventListener("click", () => {
    let sticky = nav.offsetTop;
    nav.classList.toggle("nav-active");
    if (window.pageYOffset <= sticky) {
      navbar.classList.toggle("white-bg");
    }

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `nav-resp-items-animation 0.3s ease forwards ${
          index / 7 + 0.1
        }s`;
      }
    });
    body.classList.toggle("no-down");
    burguer.classList.toggle("toggle");
  });
};

const quantidade = (op, id) => {
  var numb = parseInt(document.querySelector(`.number_${id}`).innerHTML);

  if (op === "add") {
    numb += 1;
  } else {
    if (numb > 1) {
      numb -= 1;
    }
  }

  document.querySelector(`.number_${id}`).innerHTML = numb;
  document.querySelector(`.number_modal_${id}`).innerHTML = numb;
};

nav_slide();

document.querySelector(".btn-search").onclick = () => {
  const query = document.querySelector(".input-search").value;
  window.location.href = "/search/" + query;
};
