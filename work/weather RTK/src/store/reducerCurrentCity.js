import { KEY, defaultCurrentCity } from "../const";
import { addCityStorage } from "../storage";
import { createSlice } from "@reduxjs/toolkit";

const currentCity = addCityStorage(KEY.CURRENT_CITY) || defaultCurrentCity;

const sliceCurrentCity = createSlice({
    name: "currentCity",
    initialState: {
      newCurrentCity: currentCity
    },
    reducers: {
        saveCurrentCity(state, action) {
            state.newCurrentCity = action.payload
        }
    }
})

export default sliceCurrentCity.reducer;
export const {saveCurrentCity} = sliceCurrentCity.actions;