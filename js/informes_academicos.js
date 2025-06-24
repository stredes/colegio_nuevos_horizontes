document.addEventListener("DOMContentLoaded", () => {
  const btnDescargar = document.getElementById("descargarBtn");

  btnDescargar.addEventListener("click", (e) => {
    e.preventDefault();

    const curso = document.getElementById("curso").value;
    const asignatura = document.getElementById("asignatura").value;
    const tipo = document.getElementById("tipoInforme").value;

    if (!curso || !asignatura || !tipo) {
      alert("Por favor, complete todos los campos antes de descargar.");
      return;
    }

    // Simular descarga
    const nombreArchivo = `${tipo}_${asignatura}_${curso}.pdf`.replace(/\s+/g, "_").toLowerCase();

    // Mostrar mensaje simulado (puede integrarse con descarga real más adelante)
    alert(`✅ Informe generado: ${nombreArchivo}`);

    // Agregar el informe al historial (en el panel derecho)
    const listaHistorial = document.getElementById("listaHistorial");
    const nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = `<i class="fa-solid fa-file-pdf"></i> ${nombreArchivo}`;
    listaHistorial.prepend(nuevoItem);
  });
});
