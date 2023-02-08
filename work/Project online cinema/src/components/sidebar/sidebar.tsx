import { Pagination } from "../pagination/pagination";
import { GENRES, VALUE_RATING } from "../../const";
import { SidebarItem } from "./sidebarItem";
import { SORT_RATING, SORT_RELEASE, YEAR_RELEASE, KEY_STORAGE } from "../../const";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { sortRating, sortYear, sortGenres, sortFavorites } from "../../redux/dispatch";

export function Sidebar({ totalPage, currentPage, paginate} : {
        totalPage: number,
        currentPage: number,
        paginate: (a: string) => void, 
    }) {
        const [favorite, setFavorite] = useState('');
        const [rating, setSortRating] = useState(VALUE_RATING.POPULAR_UP);
        const [release, setRelease] = useState(YEAR_RELEASE.TWENTY);
        const [genres, setGenres] = useState<[] | number[]>([]);
        const [isReset, setIsReset] = useState(false);
        const validUser = useSelector((state: any) => state.reducerLogin);

        useEffect(() => {
            sortRating(rating);
            sortYear(release);
        }, [sortRating])

        const handleChange = (value: string) => {
            setSortRating(value);
            sortRating(value);
        }

        const handleRelease = (value: string) => {
            setRelease(value);
            sortYear(value);
        }

        const resetFilter = () => {
            setSortRating(VALUE_RATING.POPULAR_UP);
            sortRating(VALUE_RATING.POPULAR_UP);
            setRelease(YEAR_RELEASE.TWENTY);
            sortYear(YEAR_RELEASE.TWENTY);
            setIsReset(true);
            setGenres([])
            sortGenres([]);
            sortFavorites('');
        }

        const filterGenre = (value: number[]) => {
            setGenres(value);
            sortGenres(value);
        }

        const handleFavorites = (value: string) => {
            setFavorite(value);
            sortFavorites(value);
        }

        return(
            <div className="sidebar">
                <h1 className="sidebar__title">Фильтры:</h1>
                <button className="sidebar__reloat btn" onClick={resetFilter}>Сбросить все фильтры</button>
                <h3>Сортировать по:</h3>
                <select name="select" className="sidebar__sort" onChange={(event) => handleChange(event.target.value)} value={rating}>
                    {SORT_RATING.map((rating) => (
                            <option key={rating.value} value={rating.value}>{rating.name}</option>
                            ))}
                </select>
                <h3>Год релиза:</h3>
                <select name="select" className="sidebar__sort" onChange={(event) => handleRelease(event.target.value)} value={release}>
                    {SORT_RELEASE.map((release) => (
                            <option key={release.value} value={release.value}>{release.value}</option>
                            ))}
                </select>
                <ul className="sidebar__genre">
                    {GENRES.map((genre) => (
                        <SidebarItem key={genre.id} value={genre.id} genre={genre.name} isReset={isReset} filterGenre={filterGenre} reset={setIsReset} genres={genres} />
                        ))}
                </ul>
                {validUser.login && <div className="sort__btn">
                    <button className="btn" onClick={() => handleFavorites(KEY_STORAGE.FAVORITE)}>Избранное</button>
                    <button className="btn" onClick={() => handleFavorites(KEY_STORAGE.WATCH_LATER)}>Смотреть позже</button>
                </div>}
                <Pagination totalPage={totalPage} currentPage={currentPage} paginate={paginate} />
            </div>
        )
}