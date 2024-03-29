import { ELEMENTS, serverUrl, apiKey, mounths, urlForecast } from './value.js';

let city = new Set(['Amur', 'Samara', 'Bali']);

ELEMENTS.BTN.addEventListener('click', function (event) {
  event.preventDefault();
  let cityName = ELEMENTS.INPUT.value;
  let url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  checkCityName(cityName, url);
});

function checkCityName(cityName, url) {
  if (!cityName || !isNaN(cityName)) {
    alert('Enter a correct city');
  } else {
    changeNow(url);
    changeDetails(url);
    changeForecast(cityName);
  }
}

function changeNow(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('data not received from the server');
      }
      return response.json();
    })
    .then((result) => {
      ELEMENTS.NOW_CITY_NAME.textContent = result.name;
      ELEMENTS.TEMPERATURE.textContent = Math.round(result.main.temp) + '°';
      let iconCode = result.weather[0].icon;
      let urlWeather = ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      ELEMENTS.ICON_NOW.src = urlWeather;
    })
    .catch(alert);
}

ELEMENTS.BODY.onload = function () {
  if (localStorage.getItem('cityes')) {
    city = new Set(JSON.parse(localStorage.getItem('cityes')));
  }
  getLocalStorageCityes();
  getLocalStorageCurrentCity();
};

ELEMENTS.ADD_LOCATION.addEventListener('click', () => addCityArray());

function addCityArray() {
  let nowCity = ELEMENTS.NOW_CITY_NAME.textContent;
  city.add(nowCity);
  saveLocalStorageCityes();
  getLocalStorageCityes();
}

function saveLocalStorageCityes() {
  localStorage.setItem('cityes', JSON.stringify([...city]));
}

function getLocalStorageCityes() {
  if (localStorage.getItem('cityes')) {
    let cityes = localStorage.getItem('cityes');
    cityes = JSON.parse(cityes);
    renderLocation(cityes);
  }
}

function getLocalStorageCurrentCity() {
  let currentCity = localStorage.getItem('currentCity');
  currentCity = JSON.parse(currentCity);
  let url = `${serverUrl}?q=${currentCity}&appid=${apiKey}&units=metric`;
  changeNow(url);
  changeDetails(url);
}

function renderLocation(cityes) {
  document.querySelectorAll('.list-item').forEach(function (city) {
    city.remove();
  });

  cityes.forEach((city) => {
    let li = document.createElement('li');
    li.className = 'list-item';
    ELEMENTS.LIST_LOCATION.prepend(li);
    let p = document.createElement('p');
    p.className = 'list-item-city';
    p.textContent = city;
    li.append(p);
    let btn = document.createElement('button');
    btn.className = 'locations__delete';
    btn.textContent = 'X';
    li.append(btn);
    li.addEventListener('click', () => {
      changeCurrentCity(p.textContent);
    });
    btn.addEventListener('click', () => {
      deleteCity(p.textContent, li);
    });
  });
}

function changeCurrentCity(nameCity) {
  let url = `${serverUrl}?q=${nameCity}&appid=${apiKey}&units=metric`;
  changeNow(url);
  changeDetails(url);
  changeForecast(nameCity);
  localStorage.setItem('currentCity', JSON.stringify(nameCity));
  getLocalStorageCurrentCity();
}

function deleteCity(nameCity, li) {
  let deleteCity = new Set(JSON.parse(localStorage.getItem('cityes')));
  deleteCity.delete(nameCity);
  localStorage.setItem('cityes', JSON.stringify([...deleteCity]));
  li.remove();
}

function changeDetails(url) {
  document.querySelectorAll('.forecast__item').forEach(function (item) {
    item.remove();
  });
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('data not received from the server');
      }
      return response.json();
    })
    .then((result) => {
      ELEMENTS.DETAILS_CITY.textContent = result.name;
      changeTemperature(ELEMENTS.DETAILS_TEMPERATURE, 'Temperature: ', result.main.temp);
      changeTemperature(ELEMENTS.DETAILS_FEELS_LIKE, 'Feels like: ', result.main.feels_like);
      ELEMENTS.DETAILS_WEATHER.textContent = 'Weather: ' + result.weather[0].main;
      changeSunriseSunset(result.sys.sunrise, 'Sunrise: ', ELEMENTS.DETAILS_SUNRISE);
      changeSunriseSunset(result.sys.sunset, 'Sunset: ', ELEMENTS.DETAILS_SUNSET);
    })
    .catch(alert);
}

function changeTemperature(elementTemperature, textTemperature, resultTemp) {
  elementTemperature.textContent = textTemperature + Math.round(resultTemp) + '°';
}

function changeSunriseSunset(time, timeOfDay, elementsTimeOfDay) {
  let resultTime = new Date(time * 1000);
  resultTime = resultTime.toLocaleTimeString();
  elementsTimeOfDay.textContent = timeOfDay + resultTime.slice(0, -3);
}

function changeForecast(cityName) {
  let serverForecast = `${urlForecast}?q=${cityName}&cnt=3&appid=${apiKey}&units=metric`;
  fetch(serverForecast)
    .then((response) => {
      if (!response.ok) {
        throw new Error('data not received from the server');
      }
      return response.json();
    })
    .then((result) => {
      ELEMENTS.FORECAST_CITY.textContent = result.city.name;
      result.list.map((itemList) => setForecastItem(itemList));
    })
    .catch(alert);
}

function setForecastItem(itemList) {
  let nowDate = new Date(itemList.dt * 1000);

  let div = document.createElement('div');
  div.className = 'forecast__item';
  ELEMENTS.FORECAST_LIST.prepend(div);

  let divItem = document.createElement('div');
  divItem.className = 'forecast__time';
  div.append(divItem);

  let spanDate = document.createElement('span');
  spanDate.textContent = nowDate.getDate() + ' ' + mounths[nowDate.getMonth()];
  divItem.append(spanDate);

  let spanTime = document.createElement('span');
  spanTime.textContent = nowDate.toLocaleTimeString().slice(0, -3);
  divItem.append(spanTime);

  let divWeather = document.createElement('div');
  divWeather.className = 'forecast__weather';
  div.append(divWeather);

  let divTemperature = document.createElement('div');
  divTemperature.className = 'forecast__temperature';
  divWeather.append(divTemperature);

  let spanTemperature = document.createElement('span');
  spanTemperature.textContent = 'Temperature:' + ' ' + Math.round(itemList.main.temp) + '°';
  divTemperature.append(spanTemperature);

  let spanFeelsLike = document.createElement('span');
  spanFeelsLike.textContent = 'Feels like:' + ' ' + Math.round(itemList.main.feels_like);
  divTemperature.append(spanFeelsLike);

  let divIcon = document.createElement('div');
  divIcon.className = 'forecast__icon';
  divWeather.append(divIcon);

  let spanIcon = document.createElement('span');
  spanIcon.textContent = itemList.weather[0].main;
  divIcon.append(spanIcon);
}
