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
