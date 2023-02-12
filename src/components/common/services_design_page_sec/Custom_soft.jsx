import React from 'react'
import './Custom_soft.css'
import custom from './images/custom.svg'

function Custom_soft(){
    return(
        <section className='custom-soft'> 
            <div className='custom-title'>webflow</div>
            <div className='plus-border-custom-soft'>
                <div className='plus-text-custom-soft'>2+</div>
             </div>
             <div className='custom-soft-text'>
                Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                <font color = '#FF4747' className = 'red-text'> Orci varius</font> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<font color = '#FF4747' className = 'red-text'>  Sed ullamcorper finibus </font>rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
             </div>



             <div className='grid-container-custom-soft'>
                <div className='grid-item-custom-soft'>
                    <div className='grid-text-design'>
                        what we do:
                    </div>
                </div>
                <div className='grid-item-custom-soft'>
                    <div className='grid-text-design'>
                    read more:
                    </div>
                </div>
            </div>

            <div className='grid-container-custom-soft-sec'>
                <div className='grid-item-custom-soft-sec'>
                    <div className='grid-custom-soft-text'>
                        - Vivamus sed
                    </div>
                </div>
                <div className='grid-item-custom-soft-sec'>
                    <div className='grid-custom-soft-text-second'>
                       <a href='/'> - Vivamus sed</a>
                    </div>
                </div>
                <div className='grid-item-custom-soft-sec'>
                    <div className='grid-custom-soft-text'>
                    - Carsus sapien
                    </div>
                </div>
                <div className='grid-item-custom-soft-sec'>
                    <div className='grid-custom-soft-text-second'>
                    <a href='/'>- Carsus sapien</a>
                    </div>
                </div>
                <div className='grid-item-custom-soft-sec'>
                    <div className='grid-custom-soft-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
                <div className='grid-item-custom-soft-sec'>
                    <div className='grid-custom-soft-text-second'>
                    <a href='/'>- Fusce sodales ornare</a>
                    </div>
                </div>
        </div>
        <div className='custom-soft-photo'>
        <img src={custom} alt="custom" width="80%" height="100%"/> 
            <div className='custom-soft-text-image-des'>pujc</div>      
            <div className='custom-soft-text-image-sec-des'> UI/UIX, develop</div>  
        </div>
        
        </section>
    )
}

export default Custom_soft;