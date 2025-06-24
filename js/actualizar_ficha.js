document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fichaForm");

  // Cargar datos anteriores si existen (simulado con localStorage)
  const datosGuardados = JSON.parse(localStorage.getItem("ficha_estudiante"));
  if (datosGuardados) {
    document.getElementById("direccion").value = datosGuardados.direccion || "";
    document.getElementById("telefono").value = datosGuardados.telefono || "";
    document.getElementById("correo").value = datosGuardados.correo || "";
    document.getElementById("apoderado").value = datosGuardados.apoderado || "";
    document.getElementById("emergencia").value = datosGuardados.emergencia || "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const datos = {
      direccion: document.getElementById("direccion").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      correo: document.getElementById("correo").value.trim(),
      apoderado: document.getElementById("apoderado").value.trim(),
      emergencia: document.getElementById("emergencia").value.trim()
    };

    localStorage.setItem("ficha_estudiante", JSON.stringify(datos));

    alert("✅ Ficha actualizada correctamente.");
    window.location.href = "portal_estudiante.html";
  });
});
