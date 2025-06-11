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
