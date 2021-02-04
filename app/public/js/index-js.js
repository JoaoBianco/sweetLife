const nav_slide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links-custom");
  const navLinks = document.querySelectorAll(".nav-links-custom-inner li");
  const body = document.querySelector("body");

  burguer.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

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

nav_slide();
