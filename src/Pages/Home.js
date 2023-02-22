import React from 'react';
import About from './About';
import Gallery from './Gallery';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Gallery />
            <About/>
           
        </div>
    );
};

export default Home;