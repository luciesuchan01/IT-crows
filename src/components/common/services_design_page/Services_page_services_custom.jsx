import React from 'react'
import './Services_page_services_custom.css'
import custom from './images/custom.png'

function Services_page_services_custom(){
    return(
        <section className='custom'> 
            <div className='custom-title'>custom software</div>
            <div className='plus-border-custom'>
                <div className='plus-text-custom'>2+</div>
             </div>
             <div className='custom-text'>
                Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                <font color = '#FF4747' className = 'red-text'> Orci varius</font> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<font color = '#FF4747' className = 'red-text'>  Sed ullamcorper finibus </font>rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
             </div>



             <div className='grid-container-custom'>
                <div className='grid-item-custom'>
                    <div className='grid-text-custom'>
                        what we do:
                    </div>
                </div>
                <div className='grid-item-custom'>
                    <div className='grid-text-custom'>
                    read more:
                    </div>
                </div>
            </div>

            <div className='grid-container-custom-sec'>
                <div className='grid-item-custom-sec'>
                    <div className='grid-custom-text'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-custom-sec'>
                    <div className='grid-custom-text-second'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-custom-sec'>
                    <div className='grid-custom-text'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-custom-sec'>
                    <div className='grid-custom-text-second'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-custom-sec'>
                    <div className='grid-custom-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
                <div className='grid-item-custom-sec'>
                    <div className='grid-custom-text-second'>
                    - Fusce sodales ornare
                    </div>
                </div>
        </div>
        <div className='custom-photo'>
            <img src={custom} alt="custom image" width="80%" height="100%"/> 
            <div className='custom-text-image'>pujc</div>      
            <div className='custom-text-image-sec'> UI/UIX, develop</div>  
        </div>
        
        </section>
    )
}

export default Services_page_services_custom;