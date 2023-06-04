const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
    datasets: [
      {
        label: "Temperatura",
        data: [30, 29, 28, 25, 22, 23],
        backgroundColor: "#f76b8a",
        borderColor: "#f76b8a",
        borderWidth: 1,
      },
      {
        label: "Umidade",
        data: [80, 82, 80, 85, 80, 83],
        backgroundColor: "#64c4ed",
        borderColor: "#64c4ed",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
});
const buz = document.getElementById("myChar");

new Chart(buz, {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Temperatura Média",
        data: [22, 24, 27, 23, 20, 18],
        backgroundColor: "#f76b8a",
        borderColor: "#f76b8a",
        borderWidth: 1,
      },
      {
        label: "umidade Média",
        data: [90, 89, 93, 87, 88, 82],
        backgroundColor: "#64c4ed",
        borderColor: "#64c4ed",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});