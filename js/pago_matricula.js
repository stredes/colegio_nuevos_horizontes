document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pagoForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const metodo = document.getElementById("metodo").value;
    const referencia = document.getElementById("referencia").value.trim();

    if (!metodo || !referencia) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    const pago = {
      nombre,
      monto: "$120.000",
      metodo,
      referencia,
      fecha: new Date().toLocaleString()
    };

    localStorage.setItem(`pago_matricula_${nombre}`, JSON.stringify(pago));

    alert(`✅ Pago registrado correctamente para ${nombre}.\nMétodo: ${metodo}\nReferencia: ${referencia}`);
    window.location.href = "portal_apoderado.html";
  });
});
