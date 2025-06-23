document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    const nombre = document.getElementById("nombre").value;
    const rol = document.getElementById("rol").value;
    const clave = document.getElementById("clave").value;
    const confirmarClave = document.getElementById("confirmar-clave").value;

    if (!nombre || !rol) {
      alert("Por favor, complete todos los campos requeridos.");
      return;
    }

    if (clave !== confirmarClave) {
      alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
      return;
    }

    // Simulación de registro exitoso
    alert(`¡Registro exitoso para ${nombre} como ${rol}!\nSerás redirigido a la página de inicio de sesión.`);

    // Aquí iría la lógica para enviar los datos a un servidor.
    // Por ahora, solo redirigimos al login.
    window.location.href = "inicio_sesion.html";
  });
});