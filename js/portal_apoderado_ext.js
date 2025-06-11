document.addEventListener("DOMContentLoaded", () => {
  const rol = sessionStorage.getItem("rol");
  const usuario = sessionStorage.getItem("usuario");

  if (rol !== "apoderado") {
    alert("Acceso denegado. Vista solo disponible para apoderados.");
    window.location.href = "inicio_sesion.html";
    return;
  }

  console.log(`📖 Vista extendida cargada para el apoderado: ${usuario}`);

  // Ejemplo: alertar sobre informe académico disponible
  const informeDisponible = true;

  if (informeDisponible) {
    alert("📄 Informe académico del estudiante disponible para descarga.");
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

