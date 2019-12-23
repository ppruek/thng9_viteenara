import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import menu1 from '../../img/menu1.jpg';
import menu2 from '../../img/menu2.jpg';
import menu3 from '../../img/menu3.jpg';

const CarouselV = () => {
    return (
        <div style={{ height: "150px", width: "300px" }}>
            <Carousel>
                <div>
                    <img src={menu1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={menu2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={menu3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselV