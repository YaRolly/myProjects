import { useSelector } from "react-redux";

export function Details() {
    const weather = useSelector(state => state.infoWeather);
    
    return(
        <div id="tab__02" className="tabs__block details">
            <div className="details__city">
                <h1>{weather.weather?.name || 'city'}</h1>
            </div>
            <ul className="details__list">
                <li className="details__list-item" id="details__temperature">Temperature: {weather.weather?.temperature || 0}</li>
                <li className="details__list-item" id="details__feels-like">Feels like: {weather.weather?.feelsLike || 0}</li>
                <li className="details__list-item" id="details__feels-weather">Weather: {weather.weather?.weather || 'rain'}</li>
                <li className="details__list-item" id="details__sunrise">Sunrise: {weather.weather?.sunrice || '00:00'}</li>
                <li className="details__list-item" id="details__sunset">Sunset: {weather.weather?.sunset || '00:00'}</li>
            </ul>
        </div>
    )
}