document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("button");

  loginBtn?.addEventListener("click", () => {
    const user = document.getElementById("usuario")?.value.trim().toLowerCase();
    const pass = document.getElementById("clave")?.value.trim();

    const usuariosPermitidos = {
      elma: { rol: "alumno", ruta: "portal_estudiante.html" },
      carlos: { rol: "profesor", ruta: "portal_profesor.html" },
      maria: { rol: "apoderado", ruta: "portal_apoderado.html" },
      admin: { rol: "administrativo", ruta: "portal_admin.html" } // ejemplo extra opcional
    };

    // Contraseña unificada a "123"
    if (usuariosPermitidos[user] && pass === "123") {
      sessionStorage.setItem("usuario", user);
      sessionStorage.setItem("rol", usuariosPermitidos[user].rol);
      window.location.href = usuariosPermitidos[user].ruta;
    } else {
      alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
  });
});

// 🔊 Función de lectura de texto cercano para accesibilidad
function leerTextoCercano(elemento) {
  const texto =
    elemento.closest("tr")?.innerText ||
    elemento.closest(".clase-card")?.innerText ||
    elemento.closest(".panel-ext")?.innerText ||
    elemento.closest(".tarjeta-apoderado")?.innerText ||
    elemento.closest(".perfil-estudiante")?.innerText ||
    "No se pudo identificar contenido para leer.";

  const msg = new SpeechSynthesisUtterance(texto);
  msg.lang = "es-ES";
  speechSynthesis.speak(msg);
}

// 🔊 Asignar evento a todos los íconos de volumen
document.querySelectorAll(".fa-volume-high").forEach(icono => {
  icono.addEventListener("click", () => {
    leerTextoCercano(icono);
  });
});
