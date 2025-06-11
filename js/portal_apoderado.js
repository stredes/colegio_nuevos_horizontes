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
