document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
    const rolSelect = document.getElementById('rol');
    const edadInput = document.getElementById('edad');
    const cursoSugeridoSelect = document.getElementById('cursoSugerido');
    const estudianteTipoDiv = document.createElement('div'); // Contenedor para el nuevo select

    // Crear el select para tipo de estudiante
    estudianteTipoDiv.innerHTML = `
        <label for="tipoEstudiante">Tipo de Estudiante</label>
        <select id="tipoEstudiante" required>
            <option value="" disabled selected>Seleccione el tipo de estudiante...</option>
            <option value="antiguo">Antiguo</option>
            <option value="nuevo">Nuevo</option>
        </select>
    `;
    // Insertar el nuevo campo antes del campo de correo electrónico
    document.querySelector('label[for="email"]').before(estudianteTipoDiv);

    // Si ya hay sesión activa, precargar nombre y rut (este bloque ya estaba en tu HTML, lo muevo aquí para centralizar la lógica JS)
    const usuario = getUsuarioActivo(); // Asumiendo que getUsuarioActivo() está definido en sesion.js
    if (usuario) {
        document.getElementById("nombre").value = usuario.estudiante || "";
        document.getElementById("rut").value = usuario.rut || "";
    }

    // Lógica para asignar curso sugerido basada en la edad (RF5)
    edadInput.addEventListener('input', () => {
        const edad = parseInt(edadInput.value);
        let curso = 'No asignado';

        if (edad >= 5 && edad <= 6) {
            curso = 'Pre-kinder o Kinder';
        } else if (edad >= 7 && edad <= 8) {
            curso = '1° a 2° Básico';
        } else if (edad >= 9 && edad <= 10) {
            curso = '3° a 4° Básico';
        } else if (edad >= 11 && edad <= 12) {
            curso = '5° a 6° Básico';
        } else if (edad >= 13 && edad <= 14) {
            curso = '7° a 8° Básico';
        } else if (edad >= 15 && edad <= 18) {
            curso = '1° a 4° Medio';
        }
        cursoSugeridoSelect.innerHTML = `<option>${curso}</option>`;
    });

    // Lógica para mostrar/ocultar el campo "Tipo de Estudiante"
    rolSelect.addEventListener('change', () => {
        if (rolSelect.value === 'alumno') {
            estudianteTipoDiv.style.display = 'block';
            document.getElementById('tipoEstudiante').setAttribute('required', 'true');
        } else {
            estudianteTipoDiv.style.display = 'none';
            document.getElementById('tipoEstudiante').removeAttribute('required');
        }
    });

    // Inicializar el estado al cargar la página
    if (rolSelect.value !== 'alumno') {
        estudianteTipoDiv.style.display = 'none';
    }

    registroForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        // **Validación de campos vacíos**
        const inputs = registroForm.querySelectorAll('input[required], select[required]');
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = 'red'; // Resaltar el campo vacío
                allFieldsFilled = false;
            } else {
                input.style.borderColor = '#ccc'; // Volver al color normal
            }
        });

        if (!allFieldsFilled) {
            alert('Por favor, completa todos los campos obligatorios antes de registrarte.');
            return; // Detener el envío si hay campos vacíos
        }

        // Validación de contraseñas
        const clave = document.getElementById('clave').value;
        const confirmarClave = document.getElementById('confirmar-clave').value;

        if (clave !== confirmarClave) {
            alert('Las contraseñas no coinciden. Por favor, verifica.');
            document.getElementById('clave').style.borderColor = 'red';
            document.getElementById('confirmar-clave').style.borderColor = 'red';
            return;
        } else {
            document.getElementById('clave').style.borderColor = '#ccc';
            document.getElementById('confirmar-clave').style.borderColor = '#ccc';
        }

        // Lógica para estudiante nuevo/antiguo
        const tipoEstudianteSelect = document.getElementById('tipoEstudiante');
        if (rolSelect.value === 'alumno' && tipoEstudianteSelect.value === 'nuevo') {
            alert('¡Registro exitoso! Se ha enviado un mensaje con los siguientes pasos a tu correo electrónico.');
        } else {
            alert('¡Registro exitoso!');
        }

        // Aquí podrías agregar la lógica para enviar los datos al servidor, si la tuvieras.
        // Por ejemplo: fetch('/api/registro', { method: 'POST', body: new FormData(registroForm) });
        console.log('Formulario enviado (simulado)');
        registroForm.reset(); // Opcional: limpiar el formulario después del envío
    });
});

// Nota: Asegúrate de que getUsuarioActivo() esté definido y accesible.
// Si getUsuarioActivo() está en sesion.js, verifica que sesion.js se cargue antes que registro.js.