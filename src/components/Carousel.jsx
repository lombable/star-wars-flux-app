import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../img/stormtrooper.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="../img/starwars-jpeg-297760561.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="../img/home_page.jpeg" className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;