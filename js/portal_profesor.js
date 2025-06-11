document.addEventListener("DOMContentLoaded", () => {
  const rol = sessionStorage.getItem("rol");

  // Verificación de acceso
  if (rol !== "profesor") {
    alert("Acceso denegado. Este portal es exclusivo para profesores.");
    window.location.href = "inicio_sesion.html";
    return;
  }

  console.log("👨‍🏫 Portal del profesor cargado correctamente.");

  // Ejemplo: alerta de tareas por revisar
  const tareasPendientes = 4;
  if (tareasPendientes > 0) {
    console.log(`📌 Tienes ${tareasPendientes} tareas por revisar hoy.`);
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

