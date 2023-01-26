import React from 'react'
import './Services_page_services.css'
import video_services from './images/video.png'
function Services_page_services(){
    return(
        <section className='Services-services'> 
            <div className='Services-services-main-title'>web development</div>

            <div className='plus-border-services'>
                <div className='plus-text-services'>2+</div>
             </div> 

             <div className='services-text'>
                Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                <font color = '#FF4747' className = 'red-text'> Orci varius</font> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<font color = '#FF4747' className = 'red-text'>  Sed ullamcorper finibus </font>rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
             </div>

             <div className='video-services'>
                <img src={video_services} alt="" width="100%" height="80%"/>            
             </div>

             <div className='grid-container-ss'>
                <div className='grid-item-ss'>
                    <div className='ss-text'>
                        what we do:
                    </div>
                </div>
                <div className='grid-item-ss'>
                    <div className='ss-text'>
                    read more:
                    </div>
                </div>
            </div>

            <div className='grid-container-sss'>
                <div className='grid-item-sss'>
                    <div className='sss-text'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-sss'>
                    <div className='sss-text-second'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-sss'>
                    <div className='sss-text'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-sss'>
                    <div className='sss-text-second'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-sss'>
                    <div className='sss-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
                <div className='grid-item-sss'>
                    <div className='sss-text-second'>
                    - Fusce sodales ornare
                    </div>
                </div>
        </div>
        </section>
    )
}

export default Services_page_services;