import { useDispatch } from "react-redux";
import { ACTION_TYPE } from "../../const";

export function CityItem({ nameCity, changeWeather }) {

    const dispatch = useDispatch();

    const deleteCity = () => {
        dispatch({type: ACTION_TYPE.DELETE_CITY, city: nameCity});
    }

    const addCurrentCity = () => {
        dispatch({type: ACTION_TYPE.ADD_CURRENT_CITY, city: nameCity});
        changeWeather(nameCity);
    }

    return(
        <li className = 'list-item'>
            <p className = 'list-item-city' onClick={addCurrentCity}>{nameCity}</p>
            <button className = 'locations__delete' onClick={deleteCity}>+</button>
        </li>
    )
}