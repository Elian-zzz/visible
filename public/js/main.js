document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const header = document.querySelector("header");
  const nav = document.getElementById("idnav");
  const boton = document.getElementById("btn-buscar");
  const input = document.getElementById("input-buscar");
  let lista_servicios = [
    "Carta Natal",
    "Revolución solar",
    "Transitos",
    "Siniastrias",
    "ejemplo",
  ];
  boton.addEventListener("click", () => {
    let a = input.value;
    let b = document.getElementById("contenedor-temporal");
    b.classList.add("show");
    b.classList.remove("hidden");
    b.innerText = ""; // limpia a contenedor-temporal
    if (a !== "") {
      let c = document.createElement("p"); // crea un nuevo elemento <h4>
      c.innerHTML = `<h4>Respuesta temporal</h4>${a}`;
      b.appendChild(c);
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      // si la barra de desplazamiento está en la parte superior
      header.classList.add("header-hidden");
      nav.style.backgroundColor = "transparent";
      // nav.style.top = "-10vmin";
    } else {
      header.classList.remove("header-hidden"); // si la barra de desplazamiento no está en la parte superi
      nav.style.backgroundColor = "#aa8cbb";
    }
  });

  if (window.scrollY === 0) {
    header.classList.add("header-hidden");
    nav.style.backgroundColor = "transparent";
  } else {
    header.classList.remove("header-hidden");
  }
  openBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});
