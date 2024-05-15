import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setWeatherData(null);
        setError(`No information found`);
      }
    };
    if (city !== "") {
      fetchData();
    }
  }, [city, apiKey]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="h-96 w-80 bg-gradient-to-b from-sky-500 to-indigo-500 rounded-2xl">
        <h1 className="text-white font-bold text-3xl text-center py-4">
          Weather App
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-2xl px-2 py-1"
          />
          <button
            onClick={() => {
              handleSearch();
            }}
            className="bg-white w-24 h-8 rounded-2xl mx-2 hover:bg-slate-300 hover:text-red-500"
          >
            Search
          </button>
        </div>

        <div>
          {error && (
            <div className=" text-white text-semibold text-center py-4 ">
              {error}
            </div>
          )}
          {weatherData && (
            <div className="flex flex-col items-center justify-center p-8 text-white space-y-2">
              <h2>{city}</h2>
              <h3>{weatherData.main.temp} °C</h3>
              <h4>
                Max:{weatherData.main.temp_max} °C|Min:
                {weatherData.main.temp_min}
                °C
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
