document.addEventListener("DOMContentLoaded", () => {
  const clases = {
    lenguaje: { pdf: "lenguaje.pdf", video: "lenguaje.mp4" },
    matematicas: { pdf: "matematicas.pdf", video: "matematicas.mp4" },
    biologia: { pdf: "biologia.pdf", video: "biologia.mp4" }
  };

  document.querySelectorAll(".clase-card").forEach(card => {
    const materia = card.querySelector("h3")?.textContent.toLowerCase();

    const btnPdf = card.querySelector(".fa-file-pdf");
    const btnVideo = card.querySelector(".fa-video");
    const btnAudio = card.querySelector(".fa-volume-high");

    btnPdf?.addEventListener("click", () => {
      const archivo = clases[materia]?.pdf;
      if (archivo) window.open(`../docs/${archivo}`, "_blank");
      else alert("PDF no disponible.");
    });

    btnVideo?.addEventListener("click", () => {
      const video = clases[materia]?.video;
      if (video) window.open(`../videos/${video}`, "_blank");
      else alert("Video no disponible.");
    });

    btnAudio?.addEventListener("click", () => {
      alert("Audio de clase activado (función simulada).");
      // Aquí podrías insertar un reproductor real si se desea.
    });
  });
});
