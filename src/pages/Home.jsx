import React from 'react';      
import Slideshow from '../components/Slideshow';

const Home = () => {
    return (
        <div id="home"> {/*YOU CAN ONLY HAVE ONE CANITAINER TO RETURN OR IT BREAKS  */}
        <p>This is the home page </p>
        <h1>HOME</h1>
        <Slideshow />
        </div>
    )

};

export default Home;