import './App.css';
import './reset.css';
import { useSelector } from "react-redux";
import { FormSearch } from "./components/search/search";
import { Now } from "./components/now/now";
import { Details } from "./components/details/details";
import { Forecast } from "./components/forecast/forecast";
import { Navigation } from "./components/navigation/navigation";
import { ListCity } from "./components/listcity/listCity";
import { useEffect, useState } from 'react';
import { serverUrl, apiKey, urlForecast, KEY } from "./const";
import { getDataServer, getForecastServer } from "./server";
import { WeatherContext } from "./context";
import { addCityStorage, saveCityStorage } from "./storage";

export function App() {
  const [ dataWeather, setdataWeather ] = useState('');
  const [ forecast, setForecast ] = useState('');

  useEffect(() => {
    changeWeather(newCurrentCity);
  }, [])

  const newCurrentCity = addCityStorage(KEY.CURRENT_CITY);
  const cities = useSelector(state => state.cities);
  saveCityStorage(KEY.CITY, cities);

  const changeWeather = (city) => {
    saveDataWeather(city);
    saveForecast(city);
  }

  async function saveDataWeather(city) {
    const weather = await getDataServer(`${serverUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!weather) return;
    setdataWeather(weather);
    saveCityStorage(KEY.CURRENT_CITY, weather.name);
  }

  async function saveForecast(city) {
    const dataForecast = await getForecastServer(`${urlForecast}?q=${city}&cnt=3&appid=${apiKey}&units=metric`);
    if (!dataForecast) return;
    setForecast(dataForecast);
  }

  return (
      <div>
        <div className="container">
          <FormSearch changeWeather={changeWeather}/>
          <div className="main">
            <div className="tabs">
              <div className="tabs__body">
                <WeatherContext.Provider value={{dataWeather}}>
                  <Now />
                  <Details />
                </WeatherContext.Provider>
                <Forecast forecast={ forecast } currentCity={newCurrentCity}/>
              </div>
              <Navigation />
            </div>
            <ListCity listCities={addCityStorage(KEY.CITY)} changeWeather={changeWeather}/>
          </div>
        </div>
      </div>
  )
}

