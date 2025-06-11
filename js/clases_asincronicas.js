document.addEventListener("DOMContentLoaded", () => {
  const rol = sessionStorage.getItem("rol");

  // Validar acceso solo para alumnos
  if (rol !== "alumno") {
    alert("Acceso denegado. Esta vista es exclusiva para estudiantes.");
    window.location.href = "inicio_sesion.html";
    return;
  }

  const clases = {
    lenguaje: { pdf: "lenguaje.pdf", video: "lenguaje.mp4" },
    matemáticas: { pdf: "matematicas.pdf", video: "matematicas.mp4" },
    biología: { pdf: "biologia.pdf", video: "biologia.mp4" }
  };

  document.querySelectorAll(".clase-card").forEach(card => {
    const materia = card.querySelector("h3").textContent.toLowerCase();

    const iconPdf = card.querySelector(".fa-file-pdf");
    const iconVideo = card.querySelector(".fa-video");
    const iconAudio = card.querySelector(".fa-volume-high");

    iconPdf?.addEventListener("click", () => {
      const archivo = clases[materia]?.pdf;
      if (archivo) {
        window.open(`../docs/${archivo}`, "_blank");
      } else {
        alert("PDF no disponible para esta asignatura.");
      }
    });

    iconVideo?.addEventListener("click", () => {
      const archivo = clases[materia]?.video;
      if (archivo) {
        window.open(`../videos/${archivo}`, "_blank");
      } else {
        alert("Video no disponible para esta asignatura.");
      }
    });

    iconAudio?.addEventListener("click", () => {
      alert("🎧 Audio de clase activado (simulado)");
    });
  });

  // Botón Descargar Todo
  document.querySelector(".fa-circle-down")?.parentElement?.addEventListener("click", () => {
    alert("📦 Iniciando descarga de todos los recursos disponibles...");
  });

  // Botón Actualizar
  document.querySelector(".fa-arrow-rotate-left")?.parentElement?.addEventListener("click", () => {
    location.reload();
  });
});


function leerTextoCercano(elemento) {
  const texto=$(
    elemento.closest("tr")?.innerText ||
    elemento.closest(".clase-card")?.innerText ||
    elemento.closest(".panel-ext")?.innerText ||
    elemento.closest(".tarjeta-apoderado")?.innerText ||
    elemento.closest(".perfil-estudiante")?.innerText ||
    "No se pudo identificar contenido para leer."
  );
  const msg = new SpeechSynthesisUtterance(texto);
  msg.lang = "es-ES";
  speechSynthesis.speak(msg);
}
document.querySelectorAll(".fa-volume-high").forEach(icono => {
  icono.addEventListener("click", () => {
    leerTextoCercano(icono);
  });
});

