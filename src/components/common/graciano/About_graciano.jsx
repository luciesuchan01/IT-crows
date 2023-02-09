import React from 'react'
import './About_graciano.css'
import iphone from "./images/iphone.svg"
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

            <img src={iphone} alt="mobile view of graciano page" className='mobile-img-sec'></img>

            <div className='grid-container-graciano'>
                <div className='grid-item-graciano'>
                    <div className='grid-text-grac'>
                        what we do:
                    </div>
                </div>
                </div>

            <div className='grid-container-graciano-sec'>
                <div className='grid-item-graciano-sec'>
                    <div className='grid-graciano-text'>
                        - Vivamus sed
                    </div>
                </div>
                
                <div className='grid-item-graciano-sec'>
                    <div className='grid-graciano-text'>
                    - Carsus sapien
                    </div>
                </div>
                
                <div className='grid-item-graciano-sec'>
                    <div className='grid-graciano-text'>
                    - Fusce sodales ornare
                    </div>
                </div>

                <div className='grid-item-graciano-sec'>
                    <div className='grid-graciano-text'>
                    - Risus Sit Amet Pretium
                    </div>
                </div>
               
            </div>


            

        </section>
    )
}

export default About_graciano;