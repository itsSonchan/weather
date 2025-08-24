import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  let key = "4d6d3a603f2o058afbtc1e8fa6515357";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  function showTemperature(response) {
    console.log(response.data);
    setWeather(
      <div>
        <ul>
          <li>
            Temperature: {Math.round(response.data.temperature.current)}°C
          </li>
          <li>Description: {response.data.condition.description}</li>
          <li>Humidity: {response.data.temperature.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
          <li>
            <img src={response.data.condition.icon_url} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="button" value="Search" />
      </form>
      <br />
      {weather}
    </div>
  );
}
