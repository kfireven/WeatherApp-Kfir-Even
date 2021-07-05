import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    View,
    Pressable ,
    Text
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from "@material-ui/core";

import { mainStyles } from './mainStyles.js';

import { cityAutoCompleteAPI } from '../../Apis';

import InfoScreen from '../InfoScreen/InfoScreen';
import FavoritesScreen from '../FavoritesScreen/FavoritesScreen';
import { fillFavorites } from '../FavoritesScreen/favoritesScreenActions';
import { selectedCityCountryNames, selectedCityTempeture, fiveDayForecast } from '../InfoScreen/infoScreenActions';

export const Main = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [isInfoView, setIsInfoView] = useState(true);
    const [isDarkMode, setDarkMode] = useState(true);

    const favoritesScreen = useSelector(state => state.favoritesScreen);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("favorites") == null) { // inital run add Tel Aviv City as defualt favorite
            localStorage.setItem("favorites", JSON.stringify(['Tel Aviv, Israel-215854']));
        }

        dispatch(fillFavorites(JSON.parse(localStorage.getItem("favorites"))));

        var favs = favoritesScreen.favorites;
        // if (favs == []) {
        //     fillWeatherInfo({LocalizedName: 'Tel Aviv', Country: { LocalizedName:  'Israel'}, Key: '215854'});
        // } else {
        //     fillWeatherInfo({LocalizedName: favs[0].split(', ')[0], Country: { LocalizedName:  favs[0].split(', ')[1].split('-')[0]}, Key: favs[0].split('-')[1]});
        // }
    }, []);

    const fillWeatherInfo = (values) => {
        dispatch(selectedCityCountryNames(values.LocalizedName, values.Country.LocalizedName, values.Key));
        dispatch(selectedCityTempeture(values.Key));
        dispatch(fiveDayForecast(values.Key));
    }

    const toogleView = () => {
        isInfoView ? setIsInfoView(false) : setIsInfoView(true);
    }

    return (
            <View style={isDarkMode ? mainStyles.menuView : [mainStyles.menuView, mainStyles.menuViewLightMode]}>
                {isInfoView ? <Autocomplete style={{ width: '80%', position: 'absolute', left: '20%', top: '1%' }}
                    disableClearable
                    forcePopupIcon={false}
                    options={data}
                    label={query}
                    getOptionLabel={option => option.LocalizedName + ', ' + option.Country.LocalizedName}
                    onInputChange={txt => { txt.target.value.length > 1 ? cityAutoCompleteAPI(txt.target.value).then(res => setData(res)) : data}}
                    onChange={(event, values) => {
                        fillWeatherInfo(values);
                    }}
                    renderInput={params => (
                        <TextField {...params} label={'Search City'} variant="outlined" fullWidth />
                    )}
                /> : null}
                {/* <View style={mainStyles.menuRightButtons}> */}
                    <Pressable
                        style={[mainStyles.INFObutton, mainStyles.menuButtons]}
                        title="INFO"
                        onPress={() => setIsInfoView(true)}
                    >
                    <Text style={mainStyles.TextStyle}>INFO</Text>
                    </Pressable>
                    <Pressable
                        style={[mainStyles.FAVSbutton, mainStyles.menuButtons]}
                        title="FAVS"
                        onPress={() => setIsInfoView(false)}
                    >
                        <Text style={mainStyles.TextStyle}>FAVS</Text>
                    </Pressable>
                {/* </View> */}
            <View style={isDarkMode ? mainStyles.mainView : [mainStyles.mainView, mainStyles.mainViewLightMode]}>
               {isInfoView ? <InfoScreen isDarkMode={isDarkMode} setDarkMode={setDarkMode}/> : <FavoritesScreen toogleView={toogleView} fillWeatherInfo={fillWeatherInfo}/>}
               <StatusBar style="auto" />
            </View>
        </View>
    )
}