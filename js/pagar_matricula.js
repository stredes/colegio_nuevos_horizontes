document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-pago');
  const mensaje = document.getElementById('mensaje-pago');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulación de pago exitoso
    mensaje.textContent = '¡Pago realizado con éxito! Pronto recibirá un comprobante en su correo.';
    mensaje.style.display = 'block';
    form.reset();
  });
}); 