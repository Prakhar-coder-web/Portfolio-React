import React from 'react'
import "./Testimonial.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonial() {
    return (
        <div className='testimonial'>
            <h2>Testimonial</h2>
            <Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <img src={require('./person1.png')} />
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4 className='aqua'>Designer</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad ea molestiae.
                        </p>
                    </div>
                </div>

                <div>
                    <img src={require('./person2.png')} />
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4 className='aqua'>Designer</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore illum labore?
                        </p>
                    </div>
                </div>

                <div>
                    <img src={require('./person3.png')} />
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4 className='aqua'>Designer</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore illum labore?
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
