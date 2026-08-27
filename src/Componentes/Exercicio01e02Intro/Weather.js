import { useState } from "react";
import { getWeatherByCity } from "./weatherService";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchWeather = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Consulta de Clima</h2>

      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchWeather}>Consultar</button>

      {weather && (
        <div>
          <h3>
            {weather.city} - {weather.country}
          </h3>
          <p>🌡️ Temperatura: {weather.temperature} °C</p>
          <p>💧 Umidade: {weather.humidity}%</p>
          <p>💨 Vento: {weather.windSpeed} km/h</p>
          <p>🕒 Atualizado em: {weather.time}</p>
        </div>
      )}
    </div>
  );
}