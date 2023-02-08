import { LOGIN, APPLY, SEARCH } from "../const";

interface InterfaceReducer {
    type: string,
    payload: any
}

export interface interfaceReducerSearch {
    sortPopularity: string,
    genre: string,
    rating: string,
}

export interface interfaceToken {
    login: string;
    password: string;
}

export const initialRating = 'Популярные по убыванию';
export const initialYear = 'Показать все';
export const initialFavorites = '';
export const initialGenres: number[] = [];

const initialState = {
  sortBy: initialRating,
  genres: initialGenres,
  year: initialYear,
  favorites: initialFavorites,
};

const initialSearch = {
    sortPopularity: '',
    genre: '',
    rating: '',
  };

export const reducerLogin = (state = {}, {type, payload} : {type: string, payload: interfaceToken}) => {
    switch (type) {
        case LOGIN:
            return {state, login: payload}
        default:
            return state;
    }
}

export const reducerSort = (state = initialState, {type, payload} : InterfaceReducer) => {
    switch (type) {
        case APPLY.RATING:
            return {...state, sortRating: payload};
        case APPLY.YEAR:
            return {...state, year: payload};
        case APPLY.GENRES:
            return {...state, genres: payload};
        case APPLY.FAVORITES:
            return {...state, favorites: payload};
        default:
            return state
    }
}

export const reducerSearch = (state = initialSearch, {type, payload} : InterfaceReducer) => {
    switch (type) {
        case SEARCH.POPULARITY:
            return {...state, sortPopularity: payload};
        case SEARCH.GENRES:
            return {...state, genre: payload};
        case SEARCH.RATING:
            return {...state, rating: payload};
        default:
            return state
    }
}