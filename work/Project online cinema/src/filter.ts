import { VALUE_RATING, RATING, POPULARITY, interfaceFilm } from "./const";
import { addStorage } from "./storage";

export function addCurrentFilms(currentPage: number, filmsPerPage: number, films: any) {
    const lastFilmIndex = currentPage * filmsPerPage;
    const firstFilmIndex = lastFilmIndex - filmsPerPage;
    return films.filter((film: interfaceFilm, index: number) => {
        if (firstFilmIndex <= index && index < lastFilmIndex) return film;
    });
}

export const sortRating = (rating: string, list: any) => {
    switch (rating) {
        case VALUE_RATING.POPULAR_DOWN:
            return [...list].sort((a, b) => b.popularity - a.popularity);
        case VALUE_RATING.POPULAR_UP:
            return [...list].sort((a, b) => a.popularity - b.popularity);
        case VALUE_RATING.RATING_DOWN:
            return [...list].sort((a, b) => b.vote_average - a.vote_average);
        case VALUE_RATING.RATING_UP:
            return [...list].sort((a, b) => a.vote_average - b.vote_average);
        default:
            return list
    }
}

export function sortReleaseFilms(year: string, films: any) {
    return films.filter((films: interfaceFilm) => getYear(films.release_date) === Number(year));
}

export function filterGenre(films: any, genre: number[]) {
    const filterFilm = films.filter((film: { genre_ids: number[] }) =>
    genre.every((id: number) => film.genre_ids.includes(Number(id)))
  );
    return filterFilm;
}

function getYear(date: string) {
    return new Date(date).getFullYear();
}

export function filterFavorite(favorite: string, films: any) {
    const idList = addStorage(favorite);
    const filterFilm = films.filter((item: interfaceFilm) => idList.includes(item.id));
    return filterFilm;
}

export function filterSearchGenre(listFilm: any, genres: string) {
    return listFilm.filter((film: { genre_ids: number[] }) => film.genre_ids.includes(Number(genres)));
}

export function filterSearchRating(listFilm: any, rating: string) {
    switch (rating) {
        case RATING.HIGH:
            return listFilm.filter((film: { vote_average: number }) => film.vote_average >= 5);
        case RATING.LOW:
            return listFilm.filter((film: { vote_average: number }) => film.vote_average < 5);
        default:
            return listFilm
    }
}

export function filterSearchPopularity(listFilm: any, typePopularity: string) {
    switch (typePopularity) {
        case POPULARITY.POPULARITY:
            return listFilm.filter((film: { popularity: number, vote_count: number }) => (film.popularity >= 100) && (film.vote_count >= 200));
        case POPULARITY.UNKNOWN:
            return listFilm.filter((film: { popularity: number, vote_count: number }) => (film.popularity < 100) && (film.vote_count < 200));
        default:
            return [];
    }
}