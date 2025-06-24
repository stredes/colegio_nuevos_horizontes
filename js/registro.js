document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  const edadInput = document.getElementById("edad");
  const cursoSelect = document.getElementById("cursoSugerido");

  // Lógica para asignar curso automáticamente
  edadInput.addEventListener("input", function () {
    const edad = parseInt(this.value);

    const cursos = [
      "1° Básico", "2° Básico", "3° Básico", "4° Básico", "5° Básico", "6° Básico",
      "7° Básico", "8° Básico", "1° Medio", "2° Medio", "3° Medio", "4° Medio"
    ];

    if (edad >= 6 && edad <= 17) {
      const curso = cursos[edad - 6];
      cursoSelect.innerHTML = `<option value="${curso}">${curso}</option>`;
    } else {
      cursoSelect.innerHTML = `<option value="">Edad no válida</option>`;
    }
  });

  // Validación del formulario

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

    const cursoAsignado = cursoSelect.options[cursoSelect.selectedIndex].value;
    alert(`¡Registro exitoso para ${nombre} como ${rol}!\nCurso sugerido: ${cursoAsignado}\nSerás redirigido a la página de inicio de sesión.`);

    // Aquí iría la lógica para enviar los datos a un servidor.
    window.location.href = "inicio_sesion.html";
  });
});

