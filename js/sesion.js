// js/sesion.js

// ⚠️ Simular sesión activa (esto normalmente se haría tras login)
if (!localStorage.getItem("usuario_activo")) {
  localStorage.setItem("usuario_activo", JSON.stringify({
    estudiante: "ELMA ROMAS",
    apoderado: "María Riquelme",
    rut: "23.355.565-9",
    curso: "4° Medio A"
  }));
}

// Función para obtener los datos del usuario activo
function getUsuarioActivo() {
  return JSON.parse(localStorage.getItem("usuario_activo"));
}
