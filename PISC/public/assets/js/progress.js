 // Data untuk radar chart
 const data = {
  labels: [
    "Dasar",         // Misalnya: belajar teknik dasar renang
    "Gaya Bebas",    // Kemampuan renang gaya bebas
    "Gaya Punggung", // Kemampuan renang gaya punggung
    "Gaya Dada",     // Kemampuan renang gaya dada
    "Gaya Kupu-Kupu",// Kemampuan renang gaya kupu-kupu
    "Endurance",     // Ketahanan atau stamina
    "Kecepatan",     // Kecepatan renang
  ],
  datasets: [
    {
      label: "Kemampuan Anak",
      data: [2, 1, 1, 1, 1, 0, 0], // Skor kemampuan untuk setiap skill
      backgroundColor: "rgba(16, 81, 228, 0.2)",
      borderColor: "#1051E4",
      pointBackgroundColor: "#1051E4",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#1051E4",
    },
  ],
};

// Opsi konfigurasi untuk chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "none",
    },
  },
  scales: {
    r: {
      angleLines: {
        color: "#ddd",
      },
      grid: {
        circular: true, // Membuat garis radar berbentuk bulat
        color: "#ddd",
      },
      ticks: {
        count: 3, // Hanya 3 garis progres
        backdropColor: "rgba(0, 0, 0, 0)",
        color: "#555",
        callback: function (value) {
          if (value === 2) return "Progres";
          if (value === 4) return "Progres";
        //   if (value === 5) return "Selesai";
          return ""; // Label lain dihilangkan
        },
      },
      min: 0,
      max: 5, // Skala kemampuan maksimal
    },
  },
};

// Inisialisasi Chart.js
const ctx = document.getElementById("radarChart").getContext("2d");
new Chart(ctx, {
  type: "radar",
  data: data,
  options: options,
});
