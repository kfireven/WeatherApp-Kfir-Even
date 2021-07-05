import { cityWeatherAPI, fiveDayCityWeatherAPI } from '../../Apis';

export const selectedCityCountryNames = (cityName, countryName, cityCode) => {
    return {
        type: 'SELECTED_CITY_COUNTRY_NAME',
        cityName,
        countryName,
        cityCode
    };
};

export const selectedCityTempeture = cityCode =>
    (dispatch) => {
    cityWeatherAPI(cityCode).then(res => {
        dispatch(updateSelectedCityTempeture(res));
    });
};

export const updateSelectedCityTempeture = res => {
    return {
        type: 'SELECTED_TEMP_STATUS',
        temputure: res[0].Temperature.Metric.Value,
        weatherStatus: res[0].WeatherText
    };
};

export const fiveDayForecast = cityCode => 
(dispatch) => {
    fiveDayCityWeatherAPI(cityCode).then(res => {
        dispatch(updateFiveDayForecast(res));
    });
};

export const updateFiveDayForecast = res => {
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
        type: 'FIVE_DAY_FORECAST',
        weatherDay1: Days[new Date(res.DailyForecasts[0].Date).getDay()] + '-' + res.DailyForecasts[0].Temperature.Maximum.Value +'-' + res.DailyForecasts[0].Temperature.Minimum.Value,
        weatherDay2: Days[new Date(res.DailyForecasts[1].Date).getDay()] + '-' + res.DailyForecasts[1].Temperature.Maximum.Value +'-' + res.DailyForecasts[1].Temperature.Minimum.Value,
        weatherDay3: Days[new Date(res.DailyForecasts[2].Date).getDay()] + '-' + res.DailyForecasts[2].Temperature.Maximum.Value +'-' + res.DailyForecasts[2].Temperature.Minimum.Value,
        weatherDay4: Days[new Date(res.DailyForecasts[3].Date).getDay()] + '-' + res.DailyForecasts[3].Temperature.Maximum.Value +'-' + res.DailyForecasts[3].Temperature.Minimum.Value,
        weatherDay5: Days[new Date(res.DailyForecasts[4].Date).getDay()] + '-' + res.DailyForecasts[4].Temperature.Maximum.Value +'-' + res.DailyForecasts[4].Temperature.Minimum.Value
    };
};

export const isSetSatView = condition => {
    return {
        type: 'IS_SET_SATELLITE_VIEW',
        condition
    };
};