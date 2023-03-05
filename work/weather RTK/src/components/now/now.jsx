import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { saveCity } from "../../store/reducerCities";

export function Now() {
    const {weather} = useSelector(state => state.infoWeather);
    const dispatch = useDispatch();

    const addCity = () => {
        dispatch(saveCity(weather?.name));
    }

    return(
        <div id="tab__01" className="tabs__block now">
            <div className="now__temperature">
                <h1>{weather?.temperature || 0}</h1>
            </div>
            <div className="now__icon">
                <img className="now__icon-img" src={weather?.imageUrl} alt="image" />
            </div>
            <div className="now__city">
                <span className="now__city-name">{weather?.name || 'city'}</span>
                <button className="now__heart" onClick={addCity}>
                    <img src="../public/heart.svg" />
                </button>
            </div>     
        </div>     
    )
}