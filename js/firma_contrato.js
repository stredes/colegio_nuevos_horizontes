document.addEventListener("DOMContentLoaded", () => {
  // 1. Verificación de sesión para apoderados
  const usuario = sessionStorage.getItem("usuario");
  const rol = sessionStorage.getItem("rol");

  // RF8: Solo los apoderados pueden firmar el contrato.
  if (!usuario || rol !== 'apoderado') {
    alert("Debes iniciar sesión como apoderado para acceder a esta página.");
    window.location.href = "inicio_sesion.html";
    return; // Detener la ejecución del script si el usuario no es válido
  }

  // 2. Rellenar el nombre del firmante y deshabilitar el campo
  const firmanteInput = document.getElementById("firmante");
  const nombreMostrado = usuario.charAt(0).toUpperCase() + usuario.slice(1);
  firmanteInput.value = nombreMostrado;
  firmanteInput.disabled = true; // El firmante es el usuario logueado, no se debe cambiar.

  // 3. Lógica para el envío del formulario
  const form = document.getElementById("contratoForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const aceptado = document.getElementById("aceptar").checked;

    if (!aceptado) {
      alert("Debes aceptar los términos del contrato para continuar.");
      return;
    }

    const fecha = new Date().toLocaleDateString();
    const registro = {
      firmante: usuario, // Guardamos el nombre de usuario de la sesión
      fecha,
      contratoAceptado: true
    };

    // Usamos sessionStorage para consistencia y guardamos asociado al usuario de la sesión
    sessionStorage.setItem(`contrato_firmado_${usuario}`, JSON.stringify(registro));

    alert(`Contrato firmado correctamente por ${nombreMostrado} el día ${fecha}.`);
    window.location.href = "portal_apoderado.html";
  });
});
