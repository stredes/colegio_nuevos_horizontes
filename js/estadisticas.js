document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("graficoNotas").getContext("2d");

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Lenguaje", "Matemáticas", "Ciencias", "Historia"],
      datasets: [{
        label: "Promedio de Notas",
        data: [6.2, 5.5, 5.8, 5.9],
        backgroundColor: [
          "#1e88e5", "#43a047", "#fb8c00", "#8e24aa"
        ],
        borderRadius: 6,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 7
        }
      }
    }
  });
});
