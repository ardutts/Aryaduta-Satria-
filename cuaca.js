const apiKey = "14e33fdaa791db3b017e3bfddba44eb3"; // Ganti dengan API Key OpenWeatherMap Anda
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input-group input");
const searchBtn = document.querySelector(".input-group button");
const weatherDiv = document.getElementById("weather");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const weatherIcon = document.getElementById("icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        weatherDiv.classList.add("hidden");
        alert("Kota tidak ditemukan!");
    } else {
        var data = await response.json();

        locationElement.innerHTML = data.name;
        temperatureElement.innerHTML = Math.round(data.main.temp) + "°C";
        descriptionElement.innerHTML = data.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherDiv.classList.remove("hidden");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});