document.addEventListener('DOMContentLoaded', function() {
  const formFeriado = document.getElementById('form-feriado');
  const listaFeriados = document.getElementById('lista-feriados');

  function cargarFeriados() {
    listaFeriados.innerHTML = '';
    const feriados = JSON.parse(localStorage.getItem('feriadosAcademicos') || '[]');
    feriados.forEach((item, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="fecha-label">${item.fecha}</span> ${item.descripcion} <button class="eliminar-btn" data-idx="${idx}">Eliminar</button>`;
      listaFeriados.appendChild(li);
    });
  }

  formFeriado.addEventListener('submit', function(e) {
    e.preventDefault();
    const fecha = document.getElementById('fechaFeriado').value;
    const descripcion = document.getElementById('descFeriado').value.trim();
    if (!fecha || !descripcion) return;
    const feriados = JSON.parse(localStorage.getItem('feriadosAcademicos') || '[]');
    feriados.push({ fecha, descripcion });
    localStorage.setItem('feriadosAcademicos', JSON.stringify(feriados));
    formFeriado.reset();
    cargarFeriados();
  });

  listaFeriados.addEventListener('click', function(e) {
    if (e.target.classList.contains('eliminar-btn')) {
      const idx = e.target.getAttribute('data-idx');
      const feriados = JSON.parse(localStorage.getItem('feriadosAcademicos') || '[]');
      feriados.splice(idx, 1);
      localStorage.setItem('feriadosAcademicos', JSON.stringify(feriados));
      cargarFeriados();
    }
  });

  cargarFeriados();
}); 