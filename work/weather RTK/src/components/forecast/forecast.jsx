import { ForecastItem } from "./forecastItem";
import { useSelector } from "react-redux";

export function Forecast({ currentCity }) {
    const forecast = useSelector(state => state.infoWeather);

    return(
        <div id="tab__03" className="tabs__block forecast">
            <div className="forecast__city">
                <h1>{currentCity}</h1>
            </div>
            <div className="forecast__list">
                {forecast.forecast?.map((item) => (
                    <ForecastItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
