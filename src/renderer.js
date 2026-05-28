document.addEventListener("DOMContentLoaded", () => {
  // Initialize Leaflet map
  const map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Open video dialog (via Electron IPC)
  document
    .getElementById("openVideoBtn")
    .addEventListener("click", async () => {
      const videoPath = await window.electronAPI.openVideoDialog();
      if (videoPath) {
        const video = document.getElementById("recceVideo");
        video.src = videoPath;
        video.load();
      }
    });
});
