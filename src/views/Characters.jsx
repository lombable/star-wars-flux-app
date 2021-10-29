import React from "react";
import { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";

const Characters = (props) => {

    const [swCharacters, setSwCharacters] = useState([]);
    useEffect(() => {
        fetch("https://swapi.dev/api/people/").then((data) => {
            // console.log(data)
            return data.json();
        }).then((res) => {
            console.log(res);
            setSwCharacters(res.results)
        })
    }, []
    )

    const clickHandler = (e) => {
        console.log("Si funciona");
    }

    const charsStarWars = swCharacters.map((character) => {
        return (<div className="col-4 py-2 mt-5">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Character's height is {character.height}</p>
                <i className="fas fa-heart" onClick={clickHandler}>Click to add to favorites</i>
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