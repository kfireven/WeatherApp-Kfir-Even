import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { infoScreen } from "./components/InfoScreen/InfoScreenReducers";
import { favoritesScreen } from './components/FavoritesScreen/FavoritesScreenReducers';

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