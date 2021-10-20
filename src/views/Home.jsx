import React from "react";
import { useState, useEffect } from 'react';

const Home = (props) => {
    const [characters, setCharacters] = useState([]);
    useEffect(() =>{
        fetch("https://swapi.dev/api/people/").then((data) => {
            // console.log(data)
            return data.json();
        }).then((res) =>{
            console.log(res);
            setCharacters(res.results)
        })
    }, [] 
    )

    const charsStarWars = characters.map((character) => {
        return <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">{character.height}</p>
            <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
    })

    return (
        <div className="container">
        {charsStarWars}
        </div>
    )

}

export default Home;