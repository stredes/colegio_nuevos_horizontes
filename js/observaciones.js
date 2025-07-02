document.addEventListener("DOMContentLoaded", () => {
  // Obtener datos del hijo del apoderado
  const usuarioActivo = JSON.parse(localStorage.getItem("usuario_activo"));
  const nombreHijo = usuarioActivo?.estudiante || "";
  const cursoHijo = usuarioActivo?.curso || "";

  // Simulación de observaciones almacenadas (esto debería venir de un backend o localStorage real)
  const observaciones = JSON.parse(localStorage.getItem("observaciones_academicas") || "[]");

  // Filtrar solo las del hijo
  const observacionesHijo = observaciones.filter(obs => obs.estudiante === nombreHijo && obs.curso === cursoHijo);

  const tabla = document.getElementById("tablaObservaciones");
  tabla.innerHTML = "";
  observacionesHijo.forEach(obs => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${obs.estudiante}</td>
      <td>${obs.curso}</td>
      <td>${obs.detalle}</td>
      <td>${obs.fecha}</td>
    `;
    tabla.appendChild(fila);
  });
});
