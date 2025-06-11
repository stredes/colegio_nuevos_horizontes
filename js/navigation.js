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


function leerTextoCercano(elemento) {
  const texto=$(
    elemento.closest("tr")?.innerText ||
    elemento.closest(".clase-card")?.innerText ||
    elemento.closest(".panel-ext")?.innerText ||
    elemento.closest(".tarjeta-apoderado")?.innerText ||
    elemento.closest(".perfil-estudiante")?.innerText ||
    "No se pudo identificar contenido para leer."
  );
  const msg = new SpeechSynthesisUtterance(texto);
  msg.lang = "es-ES";
  speechSynthesis.speak(msg);
}
document.querySelectorAll(".fa-volume-high").forEach(icono => {
  icono.addEventListener("click", () => {
    leerTextoCercano(icono);
  });
});

