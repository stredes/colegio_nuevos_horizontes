document.addEventListener("DOMContentLoaded", () => {
  const rol = sessionStorage.getItem("rol");
  const usuario = sessionStorage.getItem("usuario");

  if (rol !== "apoderado") {
    alert("Acceso denegado. Esta vista es exclusiva para apoderados.");
    window.location.href = "inicio_sesion.html";
    return;
  }

  console.log(`👪 Bienvenido, apoderado: ${usuario.toUpperCase()}`);

  // Ejemplo: alertar sobre reunión escolar
  const tieneReunion = true;

  if (tieneReunion) {
    alert("📅 Tienes una reunión escolar programada para el 15/06 a las 18:00 hrs.");
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

