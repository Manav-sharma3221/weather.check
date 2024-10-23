
const apiKey = 'f47afeaf9dcf41fb93e111115240609'; // Replace with your WeatherAPI key

function getWeather() {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const location = state ? `${city},${state}` : `${city}`;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Location not found: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.location.name}, ${data.location.region}</h2>
                <p>Temperature: ${data.current.temp_f} °F</p>
                <p>Weather: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity} %</p>
                <p>Wind Speed: ${data.current.wind_mph} mph</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weather-info').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
