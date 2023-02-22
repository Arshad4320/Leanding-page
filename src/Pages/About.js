import React from 'react';
import img from '../../src/Img/about.jpg'
const About = () => {
    return (
        <div className='grid mx-10 grid-cols-2 py-16'>
         <div>
                <img src={img} className="w-full" alt="" />
         </div>
       <div className='mt-16'>
                <h2 className='text-blue-800 text-5xl font-semibold'>About Us</h2>
                <p className='text-justify text-xl font-semibold mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae porro maxime quo aut velit at, facere hic nobis, accusamus et fuga incidunt officiis, debitis dignissimos! Non a iste cupiditate sapiente ducimus blanditiis accusamus quae, nesciunt nisi quaerat enim ipsam sequi quia maxime quidem repellat id totam asperiores architecto aspernatur consequatur itaque reprehenderit laborum! Nam beatae dolorem odit earum! Dicta, harum?</p>
       </div>
        </div>
    );
};

export default About;