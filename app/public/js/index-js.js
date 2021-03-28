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

if (document.querySelector(".btn-search")) {
  document.querySelector(".btn-search").onclick = () => {
    const query = document.querySelector(".input-search").value;
    window.location.href = "/search/" + query;
  };
}

if (document.getElementById('formsubmit')) {

  document.getElementById('formsubmit').addEventListener("submit", function(event){
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const email = document.getElementById("email").value
    const endereco = document.getElementById("endereco").value
    const bairro = document.getElementById("bairro").value
    const numero = document.getElementById("numero").value
    const complemento = document.getElementById("complemento").value
    const senha = document.getElementById("senha").value
    const confsenha = document.getElementById("confsenha").value

    const client = new Object
    client.nome = nome
    client.sobrenome = sobrenome
    client.email = email
    client.endereco = endereco
    client.bairro = bairro
    client.numero = numero
    client.complemento = complemento
    client.senha = senha
    client.confsenha = confsenha

    fetch('/cadastro', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    }).then(res => res.json())
    .then(res => {
      if (res.result) {
        console.log("Conta criada com sucesso!")
      }else{
        console.log("Esse e-mail já existe!")
      }
    });

  })
}

if (document.querySelector(".btn_carrinho")) {
  const btn = document.querySelectorAll(".btn_carrinho")

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
      const idProduto = e.srcElement.id.split('_')
      const qnt = document.querySelector(`.number_${idProduto[1]}`).innerHTML;

      fetch('/carrinho', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({idproduto: idProduto[1], quantidade: qnt})
      }).then(res => res.json())
      .then(res => {
        if (res.data) {
          var cart_number = document.querySelector('#cart-number').innerHTML
          cart_number = parseInt(cart_number) + 1
          document.getElementById("cart-number").innerHTML = cart_number
        }
      });
    })
  }
}

if (document.querySelector('.btn-cartremove')) {
  const btn = document.querySelectorAll('.btn-cartremove')
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
      const id = e.srcElement.id.split('_')
      console.log(id[1])
      fetch('/carrinho', {
        method: 'delete',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id[1]})
      }).then(res => res.json())
      .then(res => {
        if (res.data) {
          var cart_number = document.querySelector('#cart-number').innerHTML
          cart_number = parseInt(cart_number) - 1
          document.getElementById("cart-number").innerHTML = cart_number


          const pricestring = document.querySelector(`.price_${id[1]}`).innerHTML.split(" ")

          const price = pricestring[2].split(',')
          const qnt = pricestring[0].split('x')
          const priceunit = parseInt(price[0])*parseInt(qnt[0]);
          const preco = document.querySelector('.info-price').innerHTML.split(" ")

          const totalnovo = parseInt(preco[1])-priceunit;


          document.querySelector('.info-price').innerHTML = 'R$ '+totalnovo
          document.querySelector(`.item_${id[1]}`).remove()
          document.querySelector(`.info_${id[1]}`).remove()
          
        }
      });
    })
  }
}
