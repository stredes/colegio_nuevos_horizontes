document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contratoForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const aceptado = document.getElementById("aceptar").checked;
    const firmante = document.getElementById("firmante").value.trim();

    if (!aceptado) {
      alert("Debes aceptar los términos del contrato para continuar.");
      return;
    }

    if (firmante === "") {
      alert("Por favor, ingresa el nombre del firmante.");
      return;
    }

    const fecha = new Date().toLocaleDateString();
    const registro = {
      firmante,
      fecha,
      contratoAceptado: true
    };

    localStorage.setItem(`contrato_firmado_${firmante}`, JSON.stringify(registro));

    alert(`Contrato firmado correctamente por ${firmante} el día ${fecha}.`);
    window.location.href = "portal_apoderado.html";
  });
});
