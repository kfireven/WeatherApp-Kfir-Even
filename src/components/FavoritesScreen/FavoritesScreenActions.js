export const fillFavorites = favs => {
    return {
        type: 'FILL_CITY_FAVORITE_LIST',
        favs
    };
};

export const removeFromFavorites = favToRemove => {
    var favs = JSON.parse(localStorage.getItem("favorites"));
    favs.splice(favs.indexOf(favToRemove), 1);
    localStorage.setItem("favorites", JSON.stringify(favs));

    return {
        type: 'REMOVE_CITY_FROM_FAVORITE_LIST',
        favs
    };
};

export const addToFavorites = fav => {
    var favs = JSON.parse(localStorage.getItem("favorites"));
    favs.push(fav);
    localStorage.setItem("favorites", JSON.stringify(favs));

    return {
        type: 'ADD_CITY_TO_FAVORITE_LIST',
        favs
    };
};

export const isCurrentCityFav = condition => {
    return {
        type: 'IS_CITY_IN_FAVORITE_LIST',
        condition
    };
};