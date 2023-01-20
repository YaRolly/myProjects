import { createStore, combineReducers } from "redux";
import { reducerCities } from "./reducerCities";
import { reducerCurrentCity } from "./reducerCurrentCity";

const rootReducer = combineReducers({
  cities: reducerCities,
  currentCity: reducerCurrentCity
})

export const storeCities = createStore(rootReducer);

