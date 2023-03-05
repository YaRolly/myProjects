import { useDispatch } from "react-redux";
import { saveCurrentCity } from "../../store/reducerCurrentCity";
import { saveCity } from "../../store/reducerCities";

export function CityItem({ nameCity, changeWeather }) {

    const dispatch = useDispatch();

    const deleteCity = () => {
        dispatch(saveCity(nameCity));
    }

    const addCurrentCity = () => {
        dispatch(saveCurrentCity(nameCity));
        changeWeather(nameCity);
    }

    return(
        <li className = 'list-item'>
            <p className = 'list-item-city' onClick={addCurrentCity}>{nameCity}</p>
            <button className = 'locations__delete' onClick={deleteCity}>+</button>
        </li>
    )
}