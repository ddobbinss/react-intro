import "./../css/Slideshow.css";
import {useState} from "react";
import React from "react";

const Slideshow = () => {

    const {slideIndex, setSlideIndex} = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context('../images/slideshow', false, /\.(png|jpe?g|svg)$/)
    );

    const slideForward = () => {
        slideIndex + 1 >= images.length ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
    }

    const slideBackward = () => {
        slideIndex - 1 < 0 ? setSlideIndex(images.length - 1) : setSlideIndex(slideIndex - 1);
    }

    return (
        <section id="slideshow">
        <img src={images[slideIndex]} />
        <a className="arrow" onClick={slideForward} id="right-arrow" href="#">&rarr;</a>
        <a className="arrow" onClick={slideBackward} id="left-arrow" href="#">&larr;</a>
        </section>
    )
}

export default Slideshow;
    