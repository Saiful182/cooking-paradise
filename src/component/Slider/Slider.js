import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import image2 from '../../carousel/2.jpg';
import image1 from '../../carousel/1.jpg';
import image3 from '../../carousel/3.jpg';

const Slider = () => {


    return (
        <div className="carousel-container" >
            <Carousel variant="light">
                <Carousel.Item>
                    <h5>Gordon Ramsay</h5>
                    <p className="carousel-text">“So when people ask me, ‘What do you think of Michelin?’ I don’t cook for guides. I cook for customers.”</p>
                    <img
                        className="slider-img   w-80"
                        src={image1}
                        alt="First slide"

                    />

                </Carousel.Item>
                <Carousel.Item>
                    <h5>Craig Claiborne</h5>
                    <p>Cooking is at once child’s play and adult joy. And cooking done with care is an act of love."</p>
                    <img
                        className=" slider-img   w-80"
                        src={image2}
                        alt="Second slide"

                    />

                </Carousel.Item>
                <Carousel.Item>
                    <h5>Paul Theroux</h5>
                    <p>"Cooking requires confident guesswork and improvisation—experimentation and substitution, dealing with failure and uncertainty in a creative way."</p>
                    <img
                        className="slider-img   w-80"
                        src={image3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;