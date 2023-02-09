import React from 'react'
import './Responsive.css'
import iphone from './images/iphone.svg'

function Responsive(){
    return(
        <section className='responsive'> 
            <div className='responsive-title'>fully responsive</div>
            <div className='responsive-text'>Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper finibus rhoncus. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
            <img src={iphone} alt="mobile view of graciano page" width="400" height="889" className='first-phone'/>
            <img src={iphone} alt="mobile view of graciano page" width="400" height="889" className='second-phone'/>

        </section>
    )
}

export default Responsive;