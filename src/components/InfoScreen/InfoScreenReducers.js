const initialState = {
    cityName: '',
    countryName: '',
    cityCode: '',
    temputure: '',
    weatherStatus: '',
    weatherDay1: '',
    weatherDay2: '',
    weatherDay3: '',
    weatherDay4: '',
    weatherDay5: '',
    isSatView: true
};

export const infoScreen = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_CITY_COUNTRY_NAME':
            return Object.assign({}, state, { cityName: action.cityName, countryName: action.countryName, cityCode: action.cityCode });
        case 'SELECTED_TEMP_STATUS':
            return Object.assign({}, state, { temputure: action.temputure, weatherStatus: action.weatherStatus });
        case 'FIVE_DAY_FORECAST':
            return Object.assign({}, state, {
                weatherDay1: action.weatherDay1,
                weatherDay2: action.weatherDay2,
                weatherDay3: action.weatherDay3,
                weatherDay4: action.weatherDay4,
                weatherDay5: action.weatherDay5,
             });
        case 'IS_SET_SATELLITE_VIEW':
            return Object.assign({}, state, { isSatView: action.condition });
        default:
            return state;
    }
};