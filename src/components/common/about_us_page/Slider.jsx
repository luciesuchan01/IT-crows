import React from 'react'
import './Slider.css'
import  slider2  from './images/slider2.png'
import slider1 from './images/slider1.png'
import slider3 from './images/slider3.png'

function Slider(){
    return(
        <section className='slider-as'> 
            <div className='image-first-slider'>
                <img src={slider1} alt=""/>
            </div>
            <div className='image-second-slider'>
                <img src={slider2} alt=""/>
            </div>
            <div className='image-third-slider'>
                <img src={slider3} alt="" />
            </div>
        </section>
    )
}

export default Slider;