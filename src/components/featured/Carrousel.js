import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/shakira_1.jpg';
import slide_two from '../../resources/images/shakira_2.jpg';
import slide_three from '../../resources/images/shakira_3.jpg';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500,
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;