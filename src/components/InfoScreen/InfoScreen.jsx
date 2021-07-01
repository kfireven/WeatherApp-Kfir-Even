import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import Map from '../Map/Map';
import { addToFavorites, removeFromFavorites, isCurrentCityFav } from '../FavoritesScreen/FavoritesScreenActions';

import './InfoScreenStyles.css';

class InfoScreen extends Component {
    constructor(props) {
        super(props);
    };

    componentDidUpdate(newProps) {
        if (newProps.infoScreen.cityCode !== this.props.infoScreen.cityCode) {
            this.isExistsInfavorites(this.props.infoScreen.cityName + ', ' + this.props.infoScreen.countryName + '-' + this.props.infoScreen.cityCode);
        }
    };

    isExistsInfavorites(city) {
        this.props.favoritesScreen.favorites.includes(city) ? this.props.isCurrentCityFav(true) : this.props.isCurrentCityFav(false);
    };

    render() {
        return (
            <div className="infoScreen">
                <Map/>
                <div className="infoscreenFirstRaw">
                    <div style={{width: '33.333%'}}>
                        <div style={{fontSize: '30px'}}>{this.props.infoScreen.cityName}</div>
                        <div>{this.props.infoScreen.countryName}</div>
                    </div>
                    <div style={{width: '33.333%'}}>
                        <div style={{fontSize: '22px'}}>{this.props.infoScreen.temputure} °</div>
                        <div style={{fontSize: '22px'}}>{this.props.infoScreen.weatherStatus}</div>
                    </div>
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
                <div className="weatherDays">
                    <div style={{width: '20%', whiteSpace: 'pre-line'}}>{this.props.infoScreen.weatherDay1.split('-')[0]+ '\n\n' + this.props.infoScreen.weatherDay1.split('-')[1] + '\n' + this.props.infoScreen.weatherDay1.split('-')[2]}</div>
                    <div style={{width: '20%', whiteSpace: 'pre-line'}}>{this.props.infoScreen.weatherDay2.split('-')[0]+ '\n\n' + this.props.infoScreen.weatherDay2.split('-')[1] + '\n' + this.props.infoScreen.weatherDay2.split('-')[2]}</div>
                    <div style={{width: '20%', whiteSpace: 'pre-line'}}>{this.props.infoScreen.weatherDay3.split('-')[0]+ '\n\n' + this.props.infoScreen.weatherDay3.split('-')[1] + '\n' + this.props.infoScreen.weatherDay3.split('-')[2]}</div>
                    <div style={{width: '20%', whiteSpace: 'pre-line'}}>{this.props.infoScreen.weatherDay4.split('-')[0]+ '\n\n' + this.props.infoScreen.weatherDay4.split('-')[1] + '\n' + this.props.infoScreen.weatherDay4.split('-')[2]}</div>
                    <div style={{width: '20%', whiteSpace: 'pre-line'}}>{this.props.infoScreen.weatherDay5.split('-')[0]+ '\n\n' + this.props.infoScreen.weatherDay5.split('-')[1] + '\n' + this.props.infoScreen.weatherDay5.split('-')[2]}</div>
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

export default connect(mapStateToProps, { addToFavorites, removeFromFavorites, isCurrentCityFav })(InfoScreen);