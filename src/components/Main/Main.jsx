import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Pressable ,
    Text
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { mainStyles } from './mainStyles.js';

import { cityAutoCompleteAPI } from '../../Apis';

import InfoScreen from '../InfoScreen/InfoScreen';
import FavoritesScreen from '../FavoritesScreen/FavoritesScreen';
import { fillFavorites } from '../FavoritesScreen/FavoritesScreenActions';
import { selectedCityCountryNames, selectedCityTempeture, fiveDayForecast } from '../InfoScreen/InfoScreenActions';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            query: '',
            isInfoView: true,
        };

        this.toogleView = this.toogleView.bind(this);
        this.fillWeatherInfo = this.fillWeatherInfo.bind(this);
    };

    componentDidMount() {
        if (localStorage.getItem("favorites") == null) { // inital run add Tel Aviv City as defualt favorite
            localStorage.setItem("favorites", JSON.stringify(['Tel Aviv, Israel-215854']));
        }

        this.props.fillFavorites(JSON.parse(localStorage.getItem("favorites")));

        var favs = this.props.favoritesScreen.favorites;
        if (favs == []) {
            this.fillWeatherInfo({LocalizedName: 'Tel Aviv', Country: { LocalizedName:  'Israel'}, Key: '215854'});
        } else {
            this.fillWeatherInfo({LocalizedName: favs[0].split(', ')[0], Country: { LocalizedName:  favs[0].split(', ')[1].split('-')[0]}, Key: favs[0].split('-')[1]});
        }
    };

    fillWeatherInfo(values) {
        this.props.selectedCityCountryNames(values.LocalizedName, values.Country.LocalizedName, values.Key);
        this.props.selectedCityTempeture(values.Key);
        this.props.fiveDayForecast(values.Key);
    }

    toogleView() {
        this.state.isInfoView ? this.setState({isInfoView: false}) : this.setState({isInfoView: true});
    }

    render() {
        return (
            <View style={mainStyles.menuView}>
                {this.state.isInfoView ? <Autocomplete style={{ width: '80%', position: 'absolute', left: '20%', top: '1%' }}
                    disableClearable
                    forcePopupIcon={false}
                    options={this.state.data}
                    label={this.state.query}
                    getOptionLabel={option => option.LocalizedName + ', ' + option.Country.LocalizedName}
                    onInputChange={txt => { txt.target.value.length > 1 ? cityAutoCompleteAPI(txt.target.value).then(res => this.setState({data: res})) : this.state.data}}
                    onChange={(event, values) => {
                        this.fillWeatherInfo(values);
                    }}
                    renderInput={params => (
                        <TextField {...params} label={'Search City'} variant="outlined" fullWidth />
                    )}
                /> : null}
                <Pressable
                    style={[mainStyles.INFObutton, mainStyles.menuButtons]}
                    title="INFO"
                    onPress={() => this.setState({isInfoView: true})}
                >
                <Text style={mainStyles.TextStyle}>INFO</Text>
                </Pressable>
                <Pressable
                    style={[mainStyles.FAVSbutton, mainStyles.menuButtons]}
                    title="FAVS"
                    onPress={() => this.setState({isInfoView: false})}
                >
                    <Text style={mainStyles.TextStyle}>FAVS</Text>
                </Pressable>
            <View style={mainStyles.mainView}>
               {this.state.isInfoView ? <InfoScreen/> : <FavoritesScreen toogleView={this.toogleView} fillWeatherInfo={this.fillWeatherInfo}/>}
               <StatusBar style="auto" />
            </View>
            </View>
        )
    }
}

export default connect(
    ({ favoritesScreen }) => {
        return {
            favoritesScreen
        };
    }, { fillFavorites, selectedCityCountryNames, selectedCityTempeture, fiveDayForecast })(Main);