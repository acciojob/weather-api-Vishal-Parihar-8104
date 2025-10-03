document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() {
  try {
    const response = await fetch(
      "https://samples.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    const weather = data.weather[0].main;

    document.getElementById("weatherData").innerText =
      `Current weather in London: ${weather}`;
  } catch (error) {
    document.getElementById("weatherData").innerText = "Error: " + error.message;
  }
}
