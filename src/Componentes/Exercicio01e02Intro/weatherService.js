export async function getWeatherByCity(city) {
  try {
    // Busca coordenadas da cidade
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=pt&format=json`
    );

    const geoData = await geoResponse.json();
    console.log ("Dados de geocodificação:", geoData);

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`Cidade "${city}" não encontrada.`);
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Busca clima atual
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
    );

    const weatherData = await weatherResponse.json();
    console.log("Dados de clima:", weatherData);
    return {
      city: name,
      country,
      latitude,
      longitude,
      temperature: weatherData.current.temperature_2m,
      humidity: weatherData.current.relative_humidity_2m,
      windSpeed: weatherData.current.wind_speed_10m,
      time: weatherData.current.time,
    };
  } catch (error) {
    console.error("Erro ao consultar clima:", error);
    throw error;
  }
}