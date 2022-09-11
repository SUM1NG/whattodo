const APIKey = "8734dfafaf376ea6f0016a95712c0fec";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherCity = document.querySelector("#weather span:first-child");
      const weatherTemp = document.querySelector("#weather-detail-temp");
      const weather = document.querySelector("#weather-detail-info");
      weatherCity.innerText = data.name.toUpperCase();
      weatherTemp.innerText = `${Math.round(data.main.temp)}º`;
      weather.innerText = `${data.weather[0].main.toUpperCase()}`;
    });
}

function onGeoErr() {
  alert("We Can't find you. No weather for you. ㅜ^ㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
