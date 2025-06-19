//your JS code here. If required.
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
	const apiKey = "https://openweathermap.org/api"; // Replace with your actual API key
	const city = "London";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

	fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then(data => {
			const weather = data.weather[0].main;
			document.getElementById("weatherData").textContent = `Current weather in London: ${weather}`;
		})
		.catch(error => {
			console.error("Error fetching weather data:", error);
			document.getElementById("weatherData").textContent = "Failed to fetch weather data.";
		});
}
