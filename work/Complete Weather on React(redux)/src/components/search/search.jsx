import { useState } from "react";
import { ACTION_TYPE } from "../../const";
import { useDispatch } from "react-redux";

export function FormSearch({changeWeather}) {
  const [ city, setCity ] = useState('');

  function handleChange(event) {
    setCity(event.target.value);
  }

  const dispatch = useDispatch();

  const addCurrentCity = () => {
      dispatch({type: ACTION_TYPE.ADD_CURRENT_CITY, city: city});
      changeWeather(city);
  }

    return(
      <form className="search" onSubmit={addCurrentCity}>
        <input type="text" className="search__input" placeholder="Aktobe" onChange={handleChange} value={city} />
        <button className="search__btn" type="submit">
          <img src="../public/search.svg" alt="image" />
        </button>
      </form>
    )
}