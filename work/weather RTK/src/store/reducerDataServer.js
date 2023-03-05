import { createSlice } from "@reduxjs/toolkit";

export const sliceWeatherServer = createSlice({
    name: "dataWeather",
    initialState: {
        weather: [],
        forecast: [],
        isLoading: false,
        error: '',
    },
    reducers: {
        fetching(state) {
            state.isLoading = true;
        },
        weatherFetchingSucces(state, action) {
            state.isLoading = false;
            state.error = '';
            state.weather = action.payload
        },
        ForecastFetchingSucces(state, action) {
            state.isLoading = false;
            state.error = '';
            state.forecast = action.payload
        },
        fetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default sliceWeatherServer.reducer;
// export const {addWeather, addForecast} = sliceWeatherServer.actions;
