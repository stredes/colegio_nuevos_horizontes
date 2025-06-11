document.addEventListener("DOMContentLoaded", () => {
  const rol = sessionStorage.getItem("rol");

  // Validación de acceso
  if (rol !== "alumno") {
    alert("Acceso denegado. Esta vista es exclusiva para estudiantes.");
    window.location.href = "inicio_sesion.html";
    return;
  }

  // Cálculo automático de promedio general de la tabla
  let total = 0;
  let cantidad = 0;

  document.querySelectorAll("table tbody tr").forEach(fila => {
    const promedioTexto = fila.children[3]?.textContent.trim();
    const promedio = parseFloat(promedioTexto.replace(",", "."));
    if (!isNaN(promedio)) {
      total += promedio;
      cantidad++;
    }
  });

  if (cantidad > 0) {
    const promedioFinal = (total / cantidad).toFixed(2);
    console.log(`📊 Promedio general del estudiante: ${promedioFinal}`);
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

