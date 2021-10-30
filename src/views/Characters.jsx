import React from "react";
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";

const Characters = (props) => {
    const {store, actions} = useContext(Context);
    
    const clickHandler = (characterName) => {
        actions.addFavorites(characterName);
    }

    const charsStarWars = store.people.map((character) => {
        return (<div className="col-4 py-2 mt-5">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Character's height is {character.height}</p>
                <i className="fas fa-heart" onClick={() => clickHandler(character.name)}>Click to add to favorites</i>
            </div>
        </div></div>)
    })

    return (
        <div className="container mt-5">
            <div className="row">
                    {charsStarWars}
            </div>
        </div>
    )

}

export default Characters;