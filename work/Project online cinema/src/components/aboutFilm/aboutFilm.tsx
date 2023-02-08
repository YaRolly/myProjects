import {NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { urlImg } from "../../const";
export function AboutFilm() {
    const location = useLocation();
    const { film } = location.state;
    return(
    <div>
        <header className="header">
                <nav className="nav">
                    <div className="nav_home">
                        <NavLink to="/">
                            <h2>Home</h2>
                        </NavLink>
                    </div>
                </nav>
        </header>
        <div className="main">
            <div className="content">
                <div className="info">
                    <img src={`${urlImg}${film.poster_path || film.backdrop_path}`} alt="image poster film"/>
                    <div className="info__main">
                        <div className="info__main-title">
                            <h1>{film.title}</h1>
                        </div>
                        <p>Рейтинг: {film['vote_average']}</p>
                        <p>{film.overview}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="detail">
            <div className="detail__container">
                <div className="detail__title">
                    <h1>Детали</h1>
                </div>
                <ul className="detail__links">
                    <li className="detail__links-item">
                        <div className="links__item-title">
                            <h4>Дата выхода:</h4>
                        </div>
                        <p>{film.release_date}</p>
                    </li>
                    <li className="detail__links-item">
                        <div className="links__item-title">
                            <h4>Оригинальный язык:</h4>
                        </div>
                        <p>{film.original_language}</p>
                    </li>
                    <li className="detail__links-item">
                        <div className="links__item-title">
                            <h4>Популярность:</h4>
                        </div>
                        <p>{film.popularity}</p>
                    </li>
                    <li className="detail__links-item">
                        <div className="links__item-title">
                            <h4>Проголосовавших:</h4>
                        </div>
                        <p>{film['vote_count']}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}