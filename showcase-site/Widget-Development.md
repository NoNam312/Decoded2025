# Weather Widget Creation

## 1. API Key Creation
To create this widget we would need to establish a connection to another website via an API call. Application Program Interface(API) is the connection between 2 computer programs (ours and the website we're taking the services from). To establish this connection we would need to make an API call, however we can't establish a call without having an API key, its like trying to go inside a house without preparing a key to the lock. 

And so we would need to obtain the API key, to do this we would need to create an account to the source of the API, in the weather widget we are using Open Weather (https://openweathermap.org/) as our API so create an account, and click on the API tab and obtain the API Key.

## 2 State Management
When we're fetching we also need to establish states inside the program, basically it acts as a getter and setter it stores the value provided by the API, here we can set it by using it like the code provided below.

```
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
```

## 3 API Request 
Once we have our API Keys we need to send in the request to obtain information from the website. thefetchWeather function uses  `async()`  up establish a connection with OpenWeatherMap, it does this by making a fetch and response. We do a try catch for any errors. and inside we do a fetch (basically to send a request) and response (receiving the response and utilize information taken from it). To utlise this please change the `{YOUR_API_KEY_HERE}` variable in below, and change it to your API key

```
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={YOUR_API_KEY_HERE}&units=metric`
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
```

## 4 Setting pictures depending on the weather
Depending on the current weather condition we will be displaying the picture that corresponds to it.
```
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
```
## 5 Widget Creation - Initiate
Now that we already establish the function to connect the website through the API, we can start to make it look pretty. We'll split this widget into 2 sections, a section for the search function and another to display the results. When building the search function, we would need an inputs such as the city name through the `onChange` variable and here we can utilise the state management again to store the value of the city to the city variable. Then we would need to create a button to conduct the method to conduct the api call, so we add an `onClick` effect to the button. In case of an error we also handle it by displaying the error.
```
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
          className="bg-white text-white-700 px-4 py-2 rounded font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Search
        </button>
      </div>
   {error && <p className="text-red-300 mt-2">{error}</p>}
```
## 6 Widget Creation - Result
Once we already receive a response from the website we want to display it to the user, we can do this by displaying the weather name, as well as display the corresponding image related with the weather.
```
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
```



