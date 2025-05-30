document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const boton_enviar = document.getElementById("btn-enviar");
  const header = document.querySelector("header");
  const nav = document.getElementById("idnav");

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
  boton_enviar.addEventListener("click", () => {
    // let nombre = document.getElementById("nombre"),
    //   email_usuario = document.getElementById("email"),
    //   mensaje = document.getElementById("mensaje");
    let datos = {
      nombre_usuario: document.getElementById("nombre").value,
      email_usuario: document.getElementById("email").value,
      mensaje: document.getElementById("mensaje").value,
    };
    // Visualizar los datos en la consola
    // console.log(
    //   `Datos obtenidos: ${datos.nombre_usuario}, ${datos.email_usuario}, ${datos.mensaje}`
    // );
    alert(`nombre: ${datos.nombre_usuario}  correo: ${datos.email_usuario}`);
  });
  if (window.scrollY === 0) {
    header.classList.add("header-hidden");
    nav.style.backgroundColor = "transparent";
  } else {
    header.classList.remove("header-hidden");
  }
  let top = 0;
  openBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});
