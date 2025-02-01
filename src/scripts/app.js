const cities = {
    kathmandu: { timezone: 'Asia/Kathmandu' },
    newYork: { timezone: 'America/New_York' },
    london: { timezone: 'Europe/London' },
    sydney: { timezone: 'Australia/Sydney' }
};

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const weatherApiUrl = 'https://api.weatherapi.com/v1/forecast.json';

function updateTime() {
    const now = new Date();
    for (const city in cities) {
        const options = { timeZone: cities[city].timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const time = now.toLocaleTimeString('en-US', options);
        document.getElementById(`${city}-time`).innerText = time;
    }
}

async function fetchWeatherForecast() {
    for (const city in cities) {
        const response = await fetch(`${weatherApiUrl}?key=${apiKey}&q=${city}&days=15`);
        const data = await response.json();
        displayWeatherForecast(city, data);
    }
}

function displayWeatherForecast(city, data) {
    const forecastContainer = document.getElementById(`${city}-forecast`);
    forecastContainer.innerHTML = '';

    data.forecast.forecastday.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `
            <h4>${day.date}</h4>
            <p>Max Temp: ${day.day.maxtemp_c} °C</p>
            <p>Min Temp: ${day.day.mintemp_c} °C</p>
            <p>Condition: ${day.day.condition.text}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}

function init() {
    updateTime();
    fetchWeatherForecast();
    setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', init);