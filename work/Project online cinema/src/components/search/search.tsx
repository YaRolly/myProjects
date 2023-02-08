import {GENRES, FILM, POPULARITY, RATING, urlImg, interfaceFilm} from '../../const';
import { useEffect, useState } from 'react';
import { sortSearchGenres, sortSearchPopularity, sortSearchRating } from '../../redux/dispatch';
import { useSelector } from "react-redux";
import { filterSearchGenre, filterSearchRating, filterSearchPopularity } from "../../filter";
import {NavLink} from "react-router-dom";
import { interfaceReducerSearch } from "../../redux/reducer";

export function Search() {
    const [currentMovie, setCurrentMovie] = useState(0);
    const [films, setFilms] = useState<interfaceFilm | [] | any>([]);
    const sort = useSelector((state: { reducerSearch: interfaceReducerSearch }) => state.reducerSearch);

    useEffect(() => { 
        setFilms(sortFilms());
      }, [sort.genre, sort.rating, sort.sortPopularity]);

    const sortFilms = () => {
        let listFilm = FILM;
        if (sort.genre) {
            listFilm = filterSearchGenre(listFilm, sort.genre);
        }
        if (sort.rating) {
            listFilm = filterSearchRating(listFilm, sort.rating);
        }
        if (sort.sortPopularity) {
            listFilm = filterSearchPopularity(listFilm, sort.sortPopularity);
            return listFilm;
        }
        return([]);
    }

    const currentFilm = films.filter((film: interfaceFilm, index: number) => index === currentMovie);

    return (
        <div> 
            <div className="search">
                <div className="search__form">
                        <form>
                            <h1>Выберите жанр</h1>
                                <select name="select" className="sidebar__sort" onChange={(event) => sortSearchGenres(event.target.value)}>
                                {GENRES.map((item) => (
                                    <option key={item.id} value={item.id}>
                                    {item.name}
                                    </option>
                                ))}
                            </select>
                        </form>
                        
                        <div>
                            <h1>Оценка фильма</h1>
                            <select name="select" className="sidebar__sort" onChange={(event) => sortSearchRating(event.target.value)}>
                                <option value={""}>Выберите оценку</option>
                                <option value={RATING.HIGH}>Высокая</option>
                                <option value={RATING.LOW}>Низкая</option>
                            </select>
                        </div>
                        
                        <div>
                            <h1>Популярность фильма</h1>
                            <select name="select" className="sidebar__sort" onChange={(event) => sortSearchPopularity(event.target.value)}>
                                <option value={""}>Выберите по популярности</option>
                                <option value={POPULARITY.POPULARITY}>Популярный</option>
                                <option value={POPULARITY.UNKNOWN}>Неизвестный</option>
                            </select>
                        </div>
                        {currentFilm[0] && <div className="buttons">
                            <NavLink to="/detail" state={{ film:  currentFilm[0] }} ><button className='btn'>Подходит</button></NavLink>  
                            <button className='btn' onClick={() => setCurrentMovie(currentMovie + 1)}>Не подходит</button>
                        </div>}

                    </div>
                <div>       
            </div>                 
            {currentFilm[0] && <div className="movie-item">
                <h1>{currentFilm[0].title}</h1>
                <img src={`${urlImg}${currentFilm[0].poster_path || currentFilm[0].backdrop_path}`} alt="image poster film"/>
            </div>}
            <NavLink to="/">
                <div className='exit__search'>
                    <button type="button" className='exit'>×</button>
                </div>
            </NavLink>
        </div>

    </div>
    );
}