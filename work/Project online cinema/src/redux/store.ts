import { combineReducers, createStore  } from "redux";
import { reducerLogin, reducerSort, reducerSearch } from "./reducer";

const rootReducer = combineReducers({
    reducerLogin,
    reducerSort,
    reducerSearch 
})
export const store = createStore(rootReducer);
