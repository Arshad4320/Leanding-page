import React from 'react';
import img1 from '../../src/Img/gallary1.jpg'
import img2 from '../../src/Img/gallery2.jpg'
import img3 from '../../src/Img/gallery3.jpg'
import img4 from '../../src/Img/gallery4.jpg'
import img5 from '../../src/Img/gallery5.jpg'
import img6 from '../../src/Img/gallery6.jpg'
import img7 from '../../src/Img/gallery7.jpg'
import img8 from '../../src/Img/gellary8.jpg'
const Gallery = () => {
    return (
        <div className='mx-10 py-16'>
            <h2 className='text-blue-800 text-5xl font-semibold text-center py-10'>Gallery</h2>
           <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-7'>
            <img src={img1} className="w-full" alt="" />
            <img src={img2} className="w-full" alt="" />
                <img src={img3} className="w-full" alt="" />
                <img src={img4} className="w-full" alt="" />
                <img src={img5} className="w-full" alt="" />
                <img src={img6} className="w-full" alt="" />
                <img src={img7} className="w-full" alt="" />
                <img src={img8} className="w-full" alt="" />
           </div>
        </div>
    );
};

export default Gallery;