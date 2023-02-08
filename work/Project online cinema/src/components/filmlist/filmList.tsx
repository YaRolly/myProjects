import { FilmItem } from "./filmItem";
import { interfaceFilm } from "../../const"

export function FilmList( { films } : { films : any }) {
    return(
        <div className="film">
            <ul className="film__list">
            {films.map((film : interfaceFilm) => (
                    <FilmItem key={film.id} film={film} />
                    ))}
            </ul>
        </div>
    )
}