document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-observacion");
  const tabla = document.querySelector("#tablaObservaciones tbody");
  const observaciones = [];

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const estudiante = document.getElementById("estudiante").value.trim();
    const observacion = document.getElementById("texto-observacion").value.trim();

    if (estudiante === "" || observacion === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crear objeto y guardarlo
    const nuevaObs = {
      fecha: new Date().toLocaleDateString(),
      estudiante,
      observacion
    };

    observaciones.push(nuevaObs);
    agregarFila(nuevaObs);

    // Limpiar formulario
    formulario.reset();
  });

  function agregarFila(obs) {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${obs.fecha}</td>
      <td>${obs.estudiante}</td>
      <td>${obs.observacion}</td>
    `;

    tabla.appendChild(fila);
  }
});
