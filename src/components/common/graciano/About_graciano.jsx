import React from 'react'
import './About_graciano.css'
import mobileImg from "./images/mobile.svg"
import mobileImg2 from "./images/Object.svg"

function About_graciano(){
    return(
        <section className='about-graciano'> 
            <div className='title-about'>about <font color = '#FFB800'>graciano</font></div>
            <div className='graciano-text-about'>
            Sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Sed ullamcorper finibus rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            </div>
            <div className='graciano-text-about-sec'>
            Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Sed ullamcorper finibus rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
            <img src={mobileImg2} alt="" className='mobile-img-sec'></img>

        </section>
    )
}

export default About_graciano;