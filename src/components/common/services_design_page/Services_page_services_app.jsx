import React from 'react'
import './Services_page_services_app.css'
import graciano from './images/case graciano.png'
import todo from './images/todo.png'
import pujc from './images/pujc.png'

function Services_page_services_app(){
    return(
        <section className='services-app'>
            <div className='services-app-main-title'>app</div>
            <div className='plus-border-app'>
                <div className='plus-text-app'>2+</div>
             </div>
            <div className='services-app-text'>
                Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                <font color = '#FF4747' className = 'red-text'> Orci varius</font> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<font color = '#FF4747' className = 'red-text'>  Sed ullamcorper finibus </font>rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
             </div>



              <div className='grid-container-sa'>
                <div className='grid-item-sa'>
                    <div className='sa-text'>
                        what we do:
                    </div>
                </div>
                <div className='grid-item-sa'>
                    <div className='sa-text'>
                    read more:
                    </div>
                </div>
            </div>

            <div className='grid-container-sas'>
                <div className='grid-item-sas'>
                    <div className='sas-text'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-sas'>
                    <div className='sas-text-second'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-sas'>
                    <div className='sas-text'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-sas'>
                    <div className='sas-text-second'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-sas'>
                    <div className='sas-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
                <div className='grid-item-sas'>
                    <div className='sas-text-second'>
                    - Fusce sodales ornare
                    </div>
                </div>
            </div>
            <div className='grid-container-app'>
            <div className='grid-item-app'>
                <img src={todo} alt=""  className='todo-photo-app'/>  
                <div className='images-text-app'>todo list</div>
                <div className='images-text-sec-app'>design, UI/UX</div>
            </div>
                <div className='grid-item-app'>
                    <img src={pujc} alt="" className='pujc-photo-app'/>         
                    <div className='images-text-app'>pujc</div>
                    <div className='images-text-third-app'>design, UI/UX</div>   
                </div>
            </div>
        </section>
    )
}

export default Services_page_services_app;