import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { removeFromFavorites } from './favoritesScreenActions';

import './FavoritesScreenStyles.css';

class FavoritesScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fillTable(this.props.favoritesScreen.favorites);
    }

    componentDidUpdate(newProps) {
        if (newProps.favoritesScreen.favorites !== this.props.favoritesScreen.favorites) {
            this.clearFavTable();
            this.fillTable(this.props.favoritesScreen.favorites);
        }
    }
    
    clearFavTable() {
        document.getElementById("favtab").remove();
    }

    favCityClick(fav) {
        this.props.toogleView();
        this.props.fillWeatherInfo({LocalizedName: fav.split(', ')[0], Country: { LocalizedName: fav.split(', ')[1].split('-')[0]}, Key: fav.split('-')[1]});
    }

    fillTable(favs) {
        var table = document.createElement("TABLE");
        table.setAttribute("id", "favtab");
        table.style.cssText = 'width:100%;border-collapse:collapse;';

        var container = document.getElementById("favtabCoontainer");
        container.appendChild(table);

        for (var i = 0; i < favs.length; i++) {
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);

                row.style.cssText = "border:6px solid black;background-color:#958269;";

                const favCityClickBtnId = 'favCityClickBtn' + i;
                const removeFromFavBtnId = 'removeFromFavBtn' + i;

                cell1.innerHTML = '<Button id="' + favCityClickBtnId + '" style="float:left;background-color:#4C4236;color:white;">' + favs[i].split('-')[0] + '</Button>';
                cell2.innerHTML = '<Button id="' + removeFromFavBtnId + '" style="float:right;background-color:#4C4236;color:white;">Remove From Favorites</Button>';

                const val = favs[i];
                document.getElementById(favCityClickBtnId).addEventListener("click", () => this.favCityClick(val));
                document.getElementById(removeFromFavBtnId).addEventListener("click", () => this.props.removeFromFavorites(val));
        }
    }

    render() {
        return (
            <div id="favtabCoontainer" className="favoritesScreen"/>
        )
    }
}

export default connect(
    ({ favoritesScreen }) => {
        return {
            favoritesScreen
        };
    }
    , { removeFromFavorites })(FavoritesScreen);