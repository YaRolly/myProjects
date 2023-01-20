import { KEY, ACTION_TYPE, defaultCurrentCity } from "../const";
import { addCityStorage } from "../storage";

const currentCity = addCityStorage(KEY.CURRENT_CITY) || defaultCurrentCity;

export const reducerCurrentCity = (state = currentCity, action) => {
    switch (action.type) {
      case ACTION_TYPE.ADD_CURRENT_CITY:
        return action.city;
      default:
        return state;
    }
  }