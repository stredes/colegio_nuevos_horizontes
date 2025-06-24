document.addEventListener("DOMContentLoaded", () => {
  const guardarBtn = document.getElementById("guardar-asistencia");

  guardarBtn.addEventListener("click", () => {
    const filas = document.querySelectorAll("tbody tr");
    const registros = [];

    filas.forEach((fila) => {
      const nombre = fila.querySelector("td:nth-child(1)").textContent.trim();
      const estado = fila.querySelector("select").value;
      registros.push({ nombre, estado });
    });

    // Simular guardado (puedes reemplazar con petición real si usas backend)
    console.log("Asistencia registrada:", registros);
    alert("✅ Asistencia guardada correctamente para " + registros.length + " estudiantes.");
  });

  // Accesibilidad: lectura en voz de la fila al hacer clic en el ícono
  document.querySelectorAll(".fa-volume-high").forEach((icono) => {
    icono.addEventListener("click", () => {
      const fila = icono.closest("tr");
      const texto = fila.innerText || "No se pudo leer esta fila.";
      const mensaje = new SpeechSynthesisUtterance(texto);
      mensaje.lang = "es-ES";
      speechSynthesis.speak(mensaje);
    });
  });
});
