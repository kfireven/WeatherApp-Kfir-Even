const accuweatherAPIkey = 'kCkqeNIqZtd15XlMY8kZM9AVAUMRVCuZ';

export function cityAutoCompleteAPI (q) {
  return fetch('https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + accuweatherAPIkey + '&q=' + q)
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        }) 
    });
}

export function cityWeatherAPI (locKey) {
    return fetch('https://dataservice.accuweather.com/currentconditions/v1/' + locKey + '?apikey=' + accuweatherAPIkey)
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        }) 
    });
}

export function fiveDayCityWeatherAPI (locKey) {
    return fetch('https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locKey + '?apikey=' + accuweatherAPIkey +'&metric=true')
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
        }) 
    });
}