document.addEventListener('DOMContentLoaded', function() {
  // Verificación de sesión para administrador
  const usuario = sessionStorage.getItem('usuario');
  const rol = sessionStorage.getItem('rol');
  if (!usuario || rol !== 'administrativo') {
    alert('Debes iniciar sesión como administrador para acceder a este panel.');
    window.location.href = 'inicio_sesion.html';
    return;
  }

  // Simulación de conteo de usuarios
  document.getElementById('usuarios-count').textContent = 120;
  document.getElementById('estudiantes-count').textContent = 80;
  document.getElementById('profesores-count').textContent = 20;
  document.getElementById('apoderados-count').textContent = 20;

  // Cerrar sesión
  document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.clear();
    window.location.href = 'inicio_sesion.html';
  });

  // --- CALENDARIO ESCOLAR ---
  const btnCalendario = document.getElementById('btnCalendario');
  const calendarioSection = document.getElementById('calendario-section');
  const formFecha = document.getElementById('form-fecha-importante');
  const listaFechas = document.getElementById('lista-fechas-importantes');

  btnCalendario.addEventListener('click', function() {
    calendarioSection.style.display = calendarioSection.style.display === 'none' ? 'block' : 'none';
  });

  // Cargar fechas desde localStorage
  function cargarFechas() {
    listaFechas.innerHTML = '';
    const fechas = JSON.parse(localStorage.getItem('fechasImportantes') || '[]');
    fechas.forEach((item, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="fecha-label">${item.fecha}</span> ${item.descripcion} <button class="eliminar-btn" data-idx="${idx}">Eliminar</button>`;
      listaFechas.appendChild(li);
    });
  }

  // Guardar nueva fecha
  formFecha.addEventListener('submit', function(e) {
    e.preventDefault();
    const fecha = document.getElementById('fechaImportante').value;
    const descripcion = document.getElementById('descripcionFecha').value.trim();
    if (!fecha || !descripcion) return;
    const fechas = JSON.parse(localStorage.getItem('fechasImportantes') || '[]');
    fechas.push({ fecha, descripcion });
    localStorage.setItem('fechasImportantes', JSON.stringify(fechas));
    formFecha.reset();
    cargarFechas();
  });

  // Eliminar fecha
  listaFechas.addEventListener('click', function(e) {
    if (e.target.classList.contains('eliminar-btn')) {
      const idx = e.target.getAttribute('data-idx');
      const fechas = JSON.parse(localStorage.getItem('fechasImportantes') || '[]');
      fechas.splice(idx, 1);
      localStorage.setItem('fechasImportantes', JSON.stringify(fechas));
      cargarFechas();
    }
  });

  cargarFechas();
}); 