import { celsius, serverIcon } from "../src/const";
import { formatTime, formatDate } from "../src/formatData";
import {sliceWeatherServer} from "./store/reducerDataServer";

class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

export function getDataServer(url) {
    return async dispatch => {
        try {
            dispatch(sliceWeatherServer.actions.fetching());
            let response = await fetch(url);
            if (!response.ok) {
                throw new ServerError('data not received from the server');
            }
            let result = await response.json();
            dispatch(sliceWeatherServer.actions.weatherFetchingSucces({
                temperature: `${Math.round(result.main.temp)}${celsius}`,
                feelsLike: `${Math.round(result.main.feels_like)}${celsius}`,
                imageUrl: `${serverIcon}${result.weather[0].icon}@2x.png`,
                weather: result.weather[0].main,
                name: result.name,
                sunrice: formatTime(result.sys.sunrise),
                sunset: formatTime(result.sys.sunset),
            }))  
        } catch (err) {
            if (err instanceof ServerError) {
                console.log(err.message);
                dispatch(sliceWeatherServer.actions.fetchingError(err.message));
            } else {
                throw err;
            }
        }
    }
}

export function getForecastServer(url) {
    return async dispatch => {
        try {
            dispatch(sliceWeatherServer.actions.fetching());
            let response = await fetch(url);
            if (!response.ok) {
                throw new ServerError('data not received from the server');
            }
            let result = await response.json();
            const forecast = result.list.map((itemList, index) => {
                return {
                    id: result.city.id + index,
                    date: formatDate(itemList.dt),
                    time: formatTime(itemList.dt),
                    temperature: `${Math.round(itemList.main.temp)}${celsius}`,
                    feelsLike: `${Math.round(itemList.main.feels_like)}${celsius}`,
                    weather: itemList.weather[0].main,
                }
            })
            dispatch(sliceWeatherServer.actions.ForecastFetchingSucces(forecast));
        } catch (err) {
            if (err instanceof ServerError) {
                console.log(err.message);
                dispatch(sliceWeatherServer.actions.fetchingError(err.message));
            } else {
                throw err;
            }
        }
    }
}