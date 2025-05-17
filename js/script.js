document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const form = document.getElementById("form-contacto");
  const header = document.querySelector("header");
  const titulo = document.getElementById("titulo-principal");
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      // si la barra de desplazamiento está en la parte superior
      header.classList.remove("header-hidden");
    } else {
      header.classList.add("header-hidden"); // si la barra de desplazamiento no está en la parte superi
    }
  });

  // Oculta el header al cargar si está en el top
  if (window.scrollY === 0) {
    header.classList.remove("header-hidden");
  } else {
    header.classList.add("header-hidden");
  }
  let top = 0;
  openBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});
