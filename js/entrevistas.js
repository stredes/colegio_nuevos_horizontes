document.addEventListener("DOMContentLoaded", () => {
  const botonesLeer = document.querySelectorAll(".icono-accesibilidad");

  botonesLeer.forEach(icono => {
    icono.addEventListener("click", () => {
      const fila = icono.closest("tr");
      const texto = fila ? fila.innerText : "No se pudo identificar la fila.";
      const mensaje = new SpeechSynthesisUtterance(texto);
      mensaje.lang = "es-ES";
      speechSynthesis.speak(mensaje);
    });
  });

  const btnImprimir = document.getElementById("btn-imprimir");
  if (btnImprimir) {
    btnImprimir.addEventListener("click", () => {
      window.print();
    });
  }
});
