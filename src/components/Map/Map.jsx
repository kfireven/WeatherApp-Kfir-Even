import React from 'react';
import { useSelector } from "react-redux";
import './mapStyles.css';

export const Map = () => {
    const infoScreen = useSelector(state => state.infoScreen);

    return (
        <div className="map">
            <div className={"mapPlaceholderImg " + (infoScreen.isSatView ? "mapSatImage" : "mapRadImage")}/>
        </div>
    )
}