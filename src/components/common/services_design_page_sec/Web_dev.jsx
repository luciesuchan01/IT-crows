import React from 'react'
import './Web_dev.css'
import video_services from './images/video.png'
import todo from './images/todo.svg'
import pujc from './images/pujc.svg'

function Web_dev(){
    return(
        <section className='web-dev'> 
            <div className='web-dev-main-title'>ui/uix design</div>

            <div className='plus-border-web-dev'>
                <div className='plus-text-web-dev'>2+</div>
             </div> 

             <div className='web-dev-design-text'>
                Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                <font color = '#FF4747' className = 'red-text'> Orci varius</font> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<font color = '#FF4747' className = 'red-text'>  Sed ullamcorper finibus </font>rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
             </div>

             <div className='video-web-dev'>
                <img src={video_services} alt="" width="763" height="420"/>            
             </div>

             <div className='grid-container-web-dev'>
                <div className='grid-item-web-dev'>
                    <div className='web-dev-text'>
                        what we do:
                    </div>
                </div>
                <div className='grid-item-web-dev'>
                    <div className='web-dev-text'>
                    read more:
                    </div>
                </div>
            </div>

            <div className='grid-container-web-dev-sec'>
                <div className='grid-item-web-dev-sec'>
                    <div className='web-dev-sec-text'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-web-dev-sec'>
                    <div className='web-dev-sec-text-second'>
                        <a href='/'>- Vivamus sed</a>
                    </div>
                </div>
                <div className='grid-item-web-dev-sec'>
                    <div className='web-dev-sec-text'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-web-dev-sec'>
                    <div className='web-dev-sec-text-second'>
                    <a href='/'>- Carsus sapien</a>
                    </div>
                </div>
                <div className='grid-item-web-dev-sec'>
                    <div className='web-dev-sec-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
                <div className='grid-item-web-dev-sec'>
                    <div className='web-dev-sec-text-second'>
                    <a href='/'>- Fusce sodales ornare</a>
                    </div>
                </div>
        </div>


        <div className='web-dev-image'>
            <img src={todo} alt="" width="763" height="457"/>  
        
            <div className='pujc-photo'>
                <img src={pujc} alt="" width="385" height="457"/>            
            </div>
        </div>

        </section>
    )
}

export default Web_dev;