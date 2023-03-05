import { CityItem } from "./cityItem";
import {NavLink} from "react-router-dom";

export function ListCity({ listCities, changeWeather }) {
    return(
        <div className="locations">
            <div className="title">
                <h1>Added Locations:</h1>
            </div>
            <ul className="list">
                {listCities.map((city) => (
                    <CityItem key={Math.random()} nameCity={city} changeWeather={changeWeather} />
                    ))}
            </ul>
            <NavLink className={'link_help'} to="/help">Help</NavLink>
        </div>
    )
}