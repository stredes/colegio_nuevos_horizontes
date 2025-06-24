document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("continuidadForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulación de confirmación de continuidad
    const nombre = document.getElementById("nombre").value;

    // Guardar en localStorage como simulación de backend
    localStorage.setItem(`continuidad_${nombre}`, "confirmado");

    alert(`Gracias, ${nombre}. Tu continuidad ha sido confirmada para el próximo año.`);
    window.location.href = "portal_estudiante.html";
  });
});
