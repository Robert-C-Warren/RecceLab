// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
	// Initialize Leaflet map
	const map = L.map("map").setView([51.505, -0.09], 13);
	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	// Open video file when button is clicked
	document.getElementById("openVideoBtn").addEventListener("click", async () => {
		const filePath = await window.electronAPI.openFile();
		if (filePath) {
			const videoElement = document.getElementById("recceVideo");
			videoElement.src = filePath;
			videoElement.load();
		}
	});
});
