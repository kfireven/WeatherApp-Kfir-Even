import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, ButtonGroup } from 'react-bootstrap';

import { Map } from '../Map/Map';
import { addToFavorites, removeFromFavorites, isCurrentCityFav } from '../FavoritesScreen/favoritesScreenActions';
import { isSetSatView } from './infoScreenActions';

import './InfoScreenStyles.css';

class InfoScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCelsiusMode: true
        };
    };

    componentDidUpdate(newProps) {
        if (newProps.infoScreen.cityCode !== this.props.infoScreen.cityCode) {
            this.isExistsInfavorites(this.props.infoScreen.cityName + ', ' + this.props.infoScreen.countryName + '-' + this.props.infoScreen.cityCode);
        }
    };

    isExistsInfavorites(city) {
        this.props.favoritesScreen.favorites.includes(city) ? this.props.isCurrentCityFav(true) : this.props.isCurrentCityFav(false);
    };

    handleClickSatRad(e){
        if (e.target.value == 'Satellite') {
            this.props.isSetSatView(true);
        } else {
            this.props.isSetSatView(false);
        }
    };

    convertToFahrenheit(value) {
       return ((value * (9/5)) + 32).toFixed(1);
    }

    render() {
        return (
            <div className={"infoScreen" + (this.props.isDarkMode ? "" : " infoscreenLightMode")}>
                <Map/>
                <div className="infoscreenFirstRaw">
                    <div className="quickInfoStyle">
                        <div style={{width: '65%'}}>
                            <div style={{fontSize: '6vmin'}}>{this.props.infoScreen.cityName}</div>
                            <div style={{fontSize: '3.7vmin'}}>{this.props.infoScreen.countryName}</div>
                        </div>
                        <div style={{width: '35%'}}>
                            <div style={{fontSize: '4.7vmin'}}>{this.state.isCelsiusMode ? this.props.infoScreen.temputure : this.convertToFahrenheit(this.props.infoScreen.temputure)} °</div>
                            <div style={{fontSize: '4.7vmin'}}>{this.props.infoScreen.weatherStatus}</div>
                        </div>
                    </div>
                    <div className="quickActionStyle">
                        <div className="buttonGroupsBackgroundStyle">
                        <ButtonGroup onClick={this.handleClickSatRad.bind(this)} className="buttonGroupStyle">
                            <Button active={this.props.infoScreen.isSatView}
                                    value="Satellite"
                                    className={"infoScreenBtnGroup " + (this.props.infoScreen.isSatView ? 'infoScreenBtnGroupActive' : '')}>
                                    Satellite
                            </Button>
                            <Button
                                    active={!this.props.infoScreen.isSatView}
                                    value="Radar"
                                    className={"infoScreenBtnGroup " + (!this.props.infoScreen.isSatView ? 'infoScreenBtnGroupActive' : '')}>
                                    Radar
                            </Button>
                        </ButtonGroup>
                        {this.props.favoritesScreen.isCurrentCityFavorite ?
                        <Button className="infoScreenFavBtn" onClick={() => {
                            this.props.removeFromFavorites(this.props.infoScreen.cityName + ', ' + this.props.infoScreen.countryName + '-' + this.props.infoScreen.cityCode);
                            this.props.isCurrentCityFav(false);
                        }}>Remove From Favorites</Button>
                        : <Button className="infoScreenFavBtn" onClick={() => {
                            this.props.addToFavorites(this.props.infoScreen.cityName + ', ' + this.props.infoScreen.countryName + '-' + this.props.infoScreen.cityCode);
                            this.props.isCurrentCityFav(true);
                            }}>Add To Favorites</Button>}
                        </div>
                        <div className="buttonGroupsBackgroundStyle">
                        <ButtonGroup className="buttonGroupStyle">
                            <Button active={this.state.isCelsiusMode}
                                    onClick={() => this.setState({isCelsiusMode: true})}
                                    className={"infoScreenBtnGroup " + (this.state.isCelsiusMode ? 'infoScreenBtnGroupActive' : '')}>
                                    Celsius
                                    </Button>
                            <Button active={!this.state.isCelsiusMode}
                                    onClick={() => this.setState({isCelsiusMode: false})}
                                    className={"infoScreenBtnGroup " + (!this.state.isCelsiusMode ? 'infoScreenBtnGroupActive' : '')}>
                                    Fahrenheit
                                    </Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button active={this.props.isDarkMode}
                                onClick={() => this.props.setDarkMode(true)}
                                className={"infoScreenBtnGroup " + (this.props.isDarkMode ? 'infoScreenBtnGroupActive' : '')}>
                                Dark
                            </Button>
                            <Button active={!this.props.isDarkMode}
                                onClick={() => this.props.setDarkMode(false)}
                                className={"infoScreenBtnGroup " + (!this.props.isDarkMode ? 'infoScreenBtnGroupActive' : '')}>
                                Light
                                </Button>
                            <Button className="infoScreenBtnGroup">Auto</Button>
                        </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className="weatherDays">
                    <div style={{fontSize: '3.2vmin', whiteSpace: 'pre-line'}}>{
                        this.props.infoScreen.weatherDay1.split('-')[0]+ '\n\n↑ '
                        + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay1.split('-')[1] : this.convertToFahrenheit(this.props.infoScreen.weatherDay1.split('-')[1]))
                        + ' °\n↓ ' + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay1.split('-')[2] : this.convertToFahrenheit(this.props.infoScreen.weatherDay1.split('-')[2])) + ' °'}
                    </div>
                    <div style={{fontSize: '3.2vmin', whiteSpace: 'pre-line'}}>{
                        this.props.infoScreen.weatherDay2.split('-')[0]+ '\n\n↑ '
                        + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay2.split('-')[1] : this.convertToFahrenheit(this.props.infoScreen.weatherDay2.split('-')[1]))
                        + ' °\n↓ ' + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay2.split('-')[2] : this.convertToFahrenheit(this.props.infoScreen.weatherDay2.split('-')[2])) + ' °'}
                    </div>
                    <div style={{fontSize: '3.2vmin', whiteSpace: 'pre-line'}}>{
                        this.props.infoScreen.weatherDay3.split('-')[0]+ '\n\n↑ '
                        + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay3.split('-')[1] : this.convertToFahrenheit(this.props.infoScreen.weatherDay3.split('-')[1]))
                        + ' °\n↓ ' + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay3.split('-')[2] : this.convertToFahrenheit(this.props.infoScreen.weatherDay3.split('-')[2])) + ' °'}
                    </div>
                    <div style={{fontSize: '3.2vmin', whiteSpace: 'pre-line'}}>{
                        this.props.infoScreen.weatherDay4.split('-')[0]+ '\n\n↑ '
                        + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay4.split('-')[1] : this.convertToFahrenheit(this.props.infoScreen.weatherDay4.split('-')[1]))
                        + ' °\n↓ ' + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay4.split('-')[2] : this.convertToFahrenheit(this.props.infoScreen.weatherDay4.split('-')[2])) + ' °'}
                    </div>
                    <div style={{fontSize: '3.2vmin', whiteSpace: 'pre-line'}}>{
                        this.props.infoScreen.weatherDay5.split('-')[0]+ '\n\n↑ '
                        + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay5.split('-')[1] : this.convertToFahrenheit(this.props.infoScreen.weatherDay5.split('-')[1]))
                        + ' °\n↓ ' + (this.state.isCelsiusMode ? this.props.infoScreen.weatherDay5.split('-')[2] : this.convertToFahrenheit(this.props.infoScreen.weatherDay5.split('-')[2])) + ' °'}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        infoScreen: state.infoScreen,
        favoritesScreen: state.favoritesScreen
    }
}

export default connect(mapStateToProps, { isSetSatView, addToFavorites, removeFromFavorites, isCurrentCityFav })(InfoScreen);