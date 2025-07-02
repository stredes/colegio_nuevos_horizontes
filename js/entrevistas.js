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

  // Modal y formulario para agendar entrevista
  const btnAgendar = document.getElementById("btn-agendar");
  const modal = document.getElementById("modal-agendar");
  const btnCancelar = document.getElementById("btn-cancelar");
  const form = document.getElementById("form-agendar");
  const tbody = document.getElementById("tabla-entrevistas");

  if (btnAgendar && modal && btnCancelar && form && tbody) {
    btnAgendar.onclick = () => {
      modal.classList.remove("modal-oculto");
      document.body.style.overflow = "hidden";
    };
    btnCancelar.onclick = () => {
      modal.classList.add("modal-oculto");
      document.body.style.overflow = "auto";
      form.reset();
    };
    form.onsubmit = (e) => {
      e.preventDefault();
      const fecha = document.getElementById("fecha").value;
      const hora = document.getElementById("hora").value;
      const estudiante = document.getElementById("estudiante").value;
      const apoderado = document.getElementById("apoderado").value;
      const motivo = document.getElementById("motivo").value;
      // Crear nueva fila
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${estudiante}</td>
        <td>${apoderado}</td>
        <td>${motivo}</td>
        <td>
          <i class="fa-solid fa-eye icono-accesibilidad" title="Ver detalles"></i>
          <i class="fa-solid fa-volume-high icono-accesibilidad" title="Leer fila" onclick="leerTextoCercano(this)"></i>
        </td>
      `;
      tbody.appendChild(tr);
      // Cerrar modal y limpiar
      modal.classList.add("modal-oculto");
      document.body.style.overflow = "auto";
      form.reset();
    };
  }
});
