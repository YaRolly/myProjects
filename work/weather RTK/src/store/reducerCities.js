import { KEY, defaultCity } from "../const";
import { addCityStorage } from "../storage";
import { createSlice } from "@reduxjs/toolkit";

const defaultCities = addCityStorage(KEY.CITY) || defaultCity;

const sliceCity = createSlice({
  name: "cities",
  initialState: {
    city: defaultCities
  },
  reducers: {
      saveCity(state, action) {
        if (state.city.find((cityItem) => cityItem === action.payload)) {
          state.city = state.city.filter(
            (item) => item.city !== action.payload
          );
        } else {
          state.city = [...state.city, action.payload];
        }
      },
      deleteCity(state, action) {
        state.city = state.city.filter((cityItem) => action.payload !== cityItem);
      }
  }
})

export default sliceCity.reducer;
export const { saveCity, deleteCity } = sliceCity.actions;