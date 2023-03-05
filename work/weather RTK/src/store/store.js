import cities from "./reducerCities";
import currentCity from "./reducerCurrentCity";
import dataWeather from "./reducerDataServer";
import { configureStore } from "@reduxjs/toolkit";

export const storeCities = configureStore({
  reducer: {
    cities: cities,
    currentCity: currentCity,
    infoWeather: dataWeather
  }
});

