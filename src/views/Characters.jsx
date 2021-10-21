import React from "react";
import { useState, useEffect } from 'react';

const Characters = (props) => {
    const [swCharacters, setSwCharacters] = useState([]);
    useEffect(() =>{
        fetch("https://swapi.dev/api/people/").then((data) => {
            // console.log(data)
            return data.json();
        }).then((res) =>{
            console.log(res);
            setSwCharacters(res.results)
        })
    }, [] 
    )

    const charsStarWars = swCharacters.map((character) => {
        return <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">{character.height}</p>
            <a href="./Characters.jsx" className="btn btn-primary">See Details</a>
        </div>
      </div>
    })

    return (
        <div className="pt-5 mt-5">
            <div className="container">
                {charsStarWars}
            </div>
        </div>
    )

}

export default Characters;