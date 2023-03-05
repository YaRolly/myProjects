import './App.css';
import './reset.css';
import { useSelector } from "react-redux";
import { FormSearch } from "./components/search/search";
import { Now } from "./components/now/now";
import { Details } from "./components/details/details";
import { Forecast } from "./components/forecast/forecast";
import { Navigation } from "./components/navigation/navigation";
import { ListCity } from "./components/listcity/listCity";
import { useEffect } from 'react';
import { serverUrl, apiKey, urlForecast, KEY } from "./const";
import { getDataServer, getForecastServer } from "./server";
import { addCityStorage, saveCityStorage } from "./storage";
import { useDispatch } from "react-redux";

export function App() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities);
  const currentCity = useSelector(state => state.currentCity);
  const { error } = useSelector(state => state.infoWeather);

  useEffect(() => {
    changeWeather(currentCity.newCurrentCity);
  }, [currentCity.newCurrentCity])


  saveCityStorage(KEY.CITY, cities.city);

  const changeWeather = (city) => {
    saveDataWeather(city);
    saveForecast(city);
  }


  function saveDataWeather(city) {
    dispatch(getDataServer(`${serverUrl}?q=${city}&appid=${apiKey}&units=metric`));
    saveCityStorage(KEY.CURRENT_CITY, currentCity.newCurrentCity);
  }

  async function saveForecast(city) {
    dispatch(getForecastServer(`${urlForecast}?q=${city}&cnt=3&appid=${apiKey}&units=metric`));
  }

  return (
      <div>
        <div className="container">
          <FormSearch changeWeather={changeWeather}/>
          <div className="main">
            <div className="tabs">
              {error && <h1>{error}</h1>}
              <div className="tabs__body">
                  <Now />
                  <Details />
                  <Forecast currentCity={currentCity.newCurrentCity}/>
              </div>
              <Navigation />
            </div>
            <ListCity listCities={addCityStorage(KEY.CITY)} changeWeather={changeWeather}/>
          </div>
        </div>
      </div>
  )
}

