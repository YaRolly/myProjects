import { urlImg, KEY_STORAGE, interfaceFilm } from "../../const";
import { contextOpenModal } from "../../context";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { saveStorage } from "../../storage";
import { NavLink } from 'react-router-dom';

export function FilmItem({ film } : { film: interfaceFilm }) {
    const {setOpenModal} = useContext(contextOpenModal);
    const validUser = useSelector((state: any) => state.reducerLogin);
    const handleClickFavorite = () => {
        if (!validUser.login) {
            setOpenModal(true);
            return;
        }
        saveStorage(KEY_STORAGE.FAVORITE, film.id);
    }

    const handleClickWatchLater = () => {
        if (!validUser.login) {
            setOpenModal(true);
            return;
        }
        saveStorage(KEY_STORAGE.WATCH_LATER, film.id);
    }

    return(
        <li className="film__item">
            <img src={`${urlImg}${film.poster_path || film.backdrop_path}`} alt="image poster film"/>
            <div>
                <div className="information">
                    <div className="information__rating">
                        <h3>Рейтинг: {film['vote_average']}</h3>
                        <button onClick={handleClickFavorite}><img src="../../../public/star.png" alt="icon star" /></button>
                        <button onClick={handleClickWatchLater}><img src="../../../public/bookmark.png" alt="icon bookmark" /></button>
                    </div>
                    <div className="information__name">
                        <h1>{film.title}</h1>
                    </div>
                </div>
                <div className="information__details">
                    <NavLink to="/detail" state={{ film }} >Подробнее</NavLink>  
                </div>
            </div>
        </li>
    )
}