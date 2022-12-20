const apikey = "92fbccf377b70c2fcc34474bea5368f1";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

    console.log(respData);

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2>Weather in ${data.name}</h2>
       <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />${data.weather[0].main} <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
       <h2>${temp}°C</h2>
       
        <h3>Humidity:${data.main.humidity}</h3>
        
    `;

    // cleanup
    main.innerHTML = "";

    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }
});; 
