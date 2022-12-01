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
                <img src={video_services} alt="" width="763" height="420"/>            
             </div>

        </section>
    )
}

export default Services_page_services;