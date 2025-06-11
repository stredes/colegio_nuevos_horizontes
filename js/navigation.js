document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector(".cerrar-sesion");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const confirmacion = confirm("¿Seguro que deseas cerrar sesión?");
      if (confirmacion) {
        sessionStorage.clear();
        window.location.href = "inicio_sesion.html";
      }
    });
  }
});
