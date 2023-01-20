import { KEY, defaultCity, ACTION_TYPE } from "../const";
import { addCityStorage } from "../storage";

const defaultCities = addCityStorage(KEY.CITY) || defaultCity;

export const reducerCities = (state = defaultCities, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_CITY:
      if (state.find((cityItem) => cityItem === action.city)) return [...state];
      return [action.city, ...state]
    case ACTION_TYPE.DELETE_CITY:
      return state.filter((cityItem) => action.city !== cityItem);
    default:
      return state;
  }
}