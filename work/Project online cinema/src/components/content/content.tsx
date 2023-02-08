import { Sidebar } from "../sidebar/sidebar";
import { FilmList } from "../filmlist/filmList";
import { useState, useEffect } from "react";
import { FILM, PAGINATE } from "../../const";
import { addCurrentFilms, sortRating, sortReleaseFilms, filterGenre, filterFavorite } from "../../filter";
import { userLogin } from "../../redux/dispatch";
import { addStorage } from "../../storage";
import { useSelector } from "react-redux";

export function Content() {
    const [currentPage, setCurrentPage] = useState(1);
    const [films, setFilms] = useState(FILM);
    const [filmsPerPage] = useState(10);
    const sort = useSelector((state: any) => state.reducerSort);
    
    useEffect(() => {
        const token = addStorage('token');
        if (token) userLogin(token);
    }, [])

    useEffect(() => {
        const newList = applyFilter();
        setFilms(newList);
      }, [
        sort.sortRating,
        sort.year,
        sort.genres,
        sort.favorites,
      ]);

    const totalPage = Math.ceil(films.length / filmsPerPage);
    if (totalPage < currentPage && totalPage !== 0) setCurrentPage(totalPage);
    const currentFilms = addCurrentFilms(currentPage, filmsPerPage, films);

    const paginate = (paginateName: string) => {
        switch (paginateName) {
            case PAGINATE.RIGHT:
                setCurrentPage(prev => prev + 1);
                break;
            case PAGINATE.LEFT:
                setCurrentPage(prev => prev - 1);
                break;
            default:
                break;
        }
    }

    const applyFilter = () => {
        let listFilms = FILM;
        if (sort.favorites) {
            listFilms = filterFavorite(sort.favorites, FILM);
        }
        if (sort.sortRating) {
            listFilms = sortRating(sort.sortRating, listFilms);
        }
        if (sort.year) {
            listFilms = sortReleaseFilms(sort.year, listFilms);
        }
        if (sort.genres) {
            listFilms = filterGenre(listFilms, sort.genres);
        }
        return listFilms
    }
    
    return(
        <div className="content">
            <Sidebar totalPage={totalPage} currentPage={currentPage} paginate={paginate} />
            <FilmList films={currentFilms} />
        </div>
    )
}