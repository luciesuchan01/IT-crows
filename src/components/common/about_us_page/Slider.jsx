import React from 'react'
import './Slider.css'
import slider_1 from './images/project-task2.svg'
import  slider_2  from './images/project-task1.svg'
import slider_3 from './images/project-task3.svg'

function Slider(){
    return(
        <section className='slider-as'> 
            <div className='image-first'>
                <img src={slider_1} alt="slider 1" width="130%" height="598"/>
            </div>
            <div className='image-second'>
                <img src={slider_2} alt="slider 2" width="130%" height="598"/>
            </div>
            <div className='image-third'>
                <img src={slider_3} alt="slider 3" width="108%" height="598"/>
            </div>
        </section>
    )
}

export default Slider;