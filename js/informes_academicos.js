document.addEventListener("DOMContentLoaded", () => {
  const imprimirBtn = document.getElementById("btnImprimir");

  if (imprimirBtn) {
    imprimirBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Función de accesibilidad: lectura por voz
  document.querySelectorAll(".fa-volume-high").forEach(icono => {
    icono.addEventListener("click", () => {
      const texto = capturarTexto(icono);
      if (texto) {
        const mensaje = new SpeechSynthesisUtterance(texto);
        mensaje.lang = "es-ES";
        speechSynthesis.speak(mensaje);
      }
    });
  });
});

function capturarTexto(elemento) {
  const fila = elemento.closest("tr");
  if (fila) {
    return fila.innerText;
  }

  const seccion = elemento.closest("section") || elemento.closest("main");
  return seccion ? seccion.innerText : "No se encontró información cercana para leer.";
}
