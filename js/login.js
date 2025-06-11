document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("button");

  loginBtn?.addEventListener("click", () => {
    const user = document.querySelector("input[type='text']").value.trim().toLowerCase();
    const pass = document.querySelector("input[type='password']").value.trim();

    const usuariosPermitidos = {
      elma: { rol: "alumno", ruta: "portal_estudiante.html" },
      carlos: { rol: "profesor", ruta: "portal_profesor.html" },
      maria: { rol: "apoderado", ruta: "portal_apoderado.html" }
    };

    if (usuariosPermitidos[user] && pass === "1234") {
      sessionStorage.setItem("usuario", user);
      sessionStorage.setItem("rol", usuariosPermitidos[user].rol);
      window.location.href = usuariosPermitidos[user].ruta;
    } else {
      alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
  });
});
