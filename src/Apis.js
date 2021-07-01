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
    
    // return [{
    //     "Version": 1,
    //     "Key": "215854",
    //     "Type": "City",
    //     "Rank": 31,
    //     "LocalizedName": "Tel Aviv",
    //     "Country": {
    //       "ID": "IL",
    //       "LocalizedName": "Israel"
    //     },
    //     "AdministrativeArea": {
    //       "ID": "TA",
    //       "LocalizedName": "Tel Aviv"
    //     }
    //   },
    //   {
    //     "Version": 1,
    //     "Key": "2158542",
    //     "Type": "City",
    //     "Rank": 31,
    //     "LocalizedName": "Tel Aviv2",
    //     "Country": {
    //       "ID": "IL",
    //       "LocalizedName": "Israel"
    //     },
    //     "AdministrativeArea": {
    //       "ID": "TA",
    //       "LocalizedName": "Tel Aviv2"
    //     }
    //   }];
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
    
    // return {
    //     "LocalObservationDateTime": "2021-06-27T21:31:00+03:00",
    //     "EpochTime": 1624818660,
    //     "WeatherText": "Clear",
    //     "WeatherIcon": 33,
    //     "HasPrecipitation": false,
    //     "PrecipitationType": null,
    //     "IsDayTime": false,
    //     "Temperature": {
    //       "Metric": {
    //         "Value": 27.7,
    //         "Unit": "C",
    //         "UnitType": 17
    //       },
    //       "Imperial": {
    //         "Value": 82,
    //         "Unit": "F",
    //         "UnitType": 18
    //       }
    //     },
    //     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    //     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    //   };
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

    // return {
    //     "Headline": {
    //       "EffectiveDate": "2021-06-27T20:00:00+03:00",
    //       "EffectiveEpochDate": 1624813200,
    //       "Severity": 7,
    //       "Text": "Warm Sunday night",
    //       "Category": "heat",
    //       "EndDate": "2021-06-28T08:00:00+03:00",
    //       "EndEpochDate": 1624856400,
    //       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
    //       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    //     },
    //     "DailyForecasts": [
    //       {
    //         "Date": "2021-06-27T07:00:00+03:00",
    //         "EpochDate": 1624766400,
    //         "Temperature": {
    //           "Minimum": {
    //             "Value": 76,
    //             "Unit": "F",
    //             "UnitType": 18
    //           },
    //           "Maximum": {
    //             "Value": 89,
    //             "Unit": "F",
    //             "UnitType": 18
    //           }
    //         },
    //         "Day": {
    //           "Icon": 1,
    //           "IconPhrase": "Sunny",
    //           "HasPrecipitation": false
    //         },
    //         "Night": {
    //           "Icon": 33,
    //           "IconPhrase": "Clear",
    //           "HasPrecipitation": false
    //         },
    //         "Sources": [
    //           "AccuWeather"
    //         ],
    //         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
    //       },
    //       {
    //         "Date": "2021-06-28T07:00:00+03:00",
    //         "EpochDate": 1624852800,
    //         "Temperature": {
    //           "Minimum": {
    //             "Value": 77,
    //             "Unit": "F",
    //             "UnitType": 18
    //           },
    //           "Maximum": {
    //             "Value": 89,
    //             "Unit": "F",
    //             "UnitType": 18
    //           }
    //         },
    //         "Day": {
    //           "Icon": 1,
    //           "IconPhrase": "Sunny",
    //           "HasPrecipitation": false
    //         },
    //         "Night": {
    //           "Icon": 33,
    //           "IconPhrase": "Clear",
    //           "HasPrecipitation": false
    //         },
    //         "Sources": [
    //           "AccuWeather"
    //         ],
    //         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
    //       },
    //       {
    //         "Date": "2021-06-29T07:00:00+03:00",
    //         "EpochDate": 1624939200,
    //         "Temperature": {
    //           "Minimum": {
    //             "Value": 78,
    //             "Unit": "F",
    //             "UnitType": 18
    //           },
    //           "Maximum": {
    //             "Value": 90,
    //             "Unit": "F",
    //             "UnitType": 18
    //           }
    //         },
    //         "Day": {
    //           "Icon": 1,
    //           "IconPhrase": "Sunny",
    //           "HasPrecipitation": false
    //         },
    //         "Night": {
    //           "Icon": 33,
    //           "IconPhrase": "Clear",
    //           "HasPrecipitation": false
    //         },
    //         "Sources": [
    //           "AccuWeather"
    //         ],
    //         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
    //       },
    //       {
    //         "Date": "2021-06-30T07:00:00+03:00",
    //         "EpochDate": 1625025600,
    //         "Temperature": {
    //           "Minimum": {
    //             "Value": 77,
    //             "Unit": "F",
    //             "UnitType": 18
    //           },
    //           "Maximum": {
    //             "Value": 89,
    //             "Unit": "F",
    //             "UnitType": 18
    //           }
    //         },
    //         "Day": {
    //           "Icon": 1,
    //           "IconPhrase": "Sunny",
    //           "HasPrecipitation": false
    //         },
    //         "Night": {
    //           "Icon": 33,
    //           "IconPhrase": "Clear",
    //           "HasPrecipitation": false
    //         },
    //         "Sources": [
    //           "AccuWeather"
    //         ],
    //         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
    //       },
    //       {
    //         "Date": "2021-07-01T07:00:00+03:00",
    //         "EpochDate": 1625112000,
    //         "Temperature": {
    //           "Minimum": {
    //             "Value": 77,
    //             "Unit": "F",
    //             "UnitType": 18
    //           },
    //           "Maximum": {
    //             "Value": 88,
    //             "Unit": "F",
    //             "UnitType": 18
    //           }
    //         },
    //         "Day": {
    //           "Icon": 1,
    //           "IconPhrase": "Sunny",
    //           "HasPrecipitation": false
    //         },
    //         "Night": {
    //           "Icon": 33,
    //           "IconPhrase": "Clear",
    //           "HasPrecipitation": false
    //         },
    //         "Sources": [
    //           "AccuWeather"
    //         ],
    //         "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    //         "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
    //       }
    //     ]
    //   };
}