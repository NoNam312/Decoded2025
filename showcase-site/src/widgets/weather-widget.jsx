import React, { useState } from "react";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Mapping weather conditions to local images
  const weatherImages = {
    Clear: "clear.png",
    Clouds: "clouds.png",
    Snow: "snow.png",
    Rain: "rain.png",
    Drizzle: "drizzle.png",
    Thunderstorm: "thunderstorm.png",
    Mist: "mist.png",
    Fog: "fog.png",
  };

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b8279dfc39ab75388c015b4b4c184be&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Error fetching weather data");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl shadow-xl text-center">
      <h1 className="text-2xl font-bold mb-4">Weather Widget</h1>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 border p-2 rounded text-black"
        />
        <button
          onClick={fetchWeather}
          className="bg-black text-black-900 px-4 py-2 rounded font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-300 mt-2">{error}</p>}

      {weather && (
        <div className="mt-6 p-4 bg-white text-black rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p className="text-gray-700 capitalize">{weather.weather[0].description}</p>

          {/* Display corresponding weather image */}
          <div className="flex justify-center mt-4">
            <img
              src={weatherImages[weather.weather[0].main] || "default.png"}
              alt={weather.weather[0].main}
              className="w-24 h-24"
            />
          </div>

          <div className="flex justify-center items-center space-x-4 mt-3">
            <div className="text-4xl">{weather.main.temp}°C</div>
            <div>
              <p className="text-sm">Wind Speed: {weather.wind.speed} m/s</p>
              <p className="text-sm">Humidity: {weather.main.humidity}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
