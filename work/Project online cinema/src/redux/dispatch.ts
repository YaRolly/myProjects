import { store } from "./store";
import { login, rating, favorites, genres, year, searchGenres, searchPopularity, searchRating } from "./action";
import { interfaceToken } from "./reducer";

export const userLogin = (payload: interfaceToken) => store.dispatch(login(payload));
export const sortRating = (payload: string) => store.dispatch(rating(payload));
export const sortFavorites = (payload: string) => store.dispatch(favorites(payload));
export const sortGenres = (payload: any) => store.dispatch(genres(payload));
export const sortYear = (payload: string) => store.dispatch(year(payload));
export const sortSearchGenres = (payload: string) => store.dispatch(searchGenres(payload));
export const sortSearchRating = (payload: string) => store.dispatch(searchRating(payload));
export const sortSearchPopularity = (payload: string) => store.dispatch(searchPopularity(payload));


