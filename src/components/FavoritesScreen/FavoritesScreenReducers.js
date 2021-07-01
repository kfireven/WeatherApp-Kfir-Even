const initialState = {
    favorites: '',
    isCurrentCityFavorite: false
};

export const favoritesScreen = (state = initialState, action) => {
    switch (action.type) {
        case 'FILL_CITY_FAVORITE_LIST':
            return Object.assign({}, state, { favorites: action.favs });
        case 'REMOVE_CITY_FROM_FAVORITE_LIST':
            return Object.assign({}, state, { favorites: action.favs });
        case 'ADD_CITY_TO_FAVORITE_LIST':
            return Object.assign({}, state, { favorites: action.favs });
        case 'IS_CITY_IN_FAVORITE_LIST':
            return Object.assign({}, state, { isCurrentCityFavorite: action.condition });
        default:
            return state;
    }
};