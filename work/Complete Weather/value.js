export const ELEMENTS = {
  INPUT: document.querySelector('.search__input'),
  BTN: document.querySelector('.search__btn'),
  TEMPERATURE: document.querySelector('.now__temperature'),
  ICON_NOW: document.querySelector('.now__icon-img'),
  CITY_NOW: document.querySelector('.now__city'),
  DELETE_LOCATION: document.querySelectorAll('.locations__delete'),
  ADD_LOCATION: document.querySelector('.now__heart'),
  LIST_LOCATION: document.querySelector('.list'),
  NOW_CITY_NAME: document.querySelector('.now__city-name'),
  LIST_CITY: document.querySelectorAll('.list-item'),
  BODY: document.body,
  DETAILS_CITY: document.querySelector('.details__city'),
  DETAILS_TEMPERATURE: document.querySelector('#details__temperature'),
  DETAILS_FEELS_LIKE: document.querySelector('#details__feels-like'),
  DETAILS_WEATHER: document.querySelector('#details__feels-weather'),
  DETAILS_SUNRISE: document.querySelector('#details__sunrise'),
  DETAILS_SUNSET: document.querySelector('#details__sunset'),
  FORECAST_CITY: document.querySelector('.forecast__city'),
  FORECAST_LIST: document.querySelector('.forecast__list'),
};
export const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
export const apiKey = 'cd715ea280a3d7315b45d7f979f62239';
export const mounths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const urlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
