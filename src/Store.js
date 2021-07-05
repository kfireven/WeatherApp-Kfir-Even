import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { infoScreen } from "./components/InfoScreen/infoScreenReducers";
import { favoritesScreen } from './components/FavoritesScreen/favoritesScreenReducers';

const reducers = combineReducers({
    infoScreen,
    favoritesScreen
});

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

export default store;