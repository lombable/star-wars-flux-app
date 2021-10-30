import React from "react";
import '../App.css';
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";

const Planets = (props) => {
    
    const {store, actions} = useContext(Context);

    const clickHandler = (e) => {
        console.log("Si funciona");
    }

    const planetsStarWars = store.planets.map((planet) => {
        return (<div className="col-4 py-2 mt-5">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">The climate is {planet.climate}</p>
                <i className="fas fa-heart" onClick={() => clickHandler()}>Click to add to favorites</i>
            </div>
        </div></div>)
    })

    return (
        <div className="container mt-5">
            <div className="row">
                    {planetsStarWars}
            </div>
        </div>
    )

}

export default Planets;