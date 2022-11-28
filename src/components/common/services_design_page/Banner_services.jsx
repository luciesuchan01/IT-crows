import React from 'react'
import './Banner_services.css'
import arrowServices from './images/arrowServices.png';
function Banner_services(){
    return(
        <section className='bannr-services'> 
            <div className='banner-services-main-title'>we build</div>
            <div className='banner-services-title'>software solutions</div>
            <div className='Gint-button'>
                <a href="/">
                    <span className="Gint-text">
                        Get in touch
                        <div className='sipka-services'>
                            <img src={arrowServices} alt="" width="133" height="26"/>
                        </div>
                    </span>
                </a>
            </div>
            <div className='text-services'>Keep up with customer and business demand in this era of rapid digitalization. We are your partners in strategy and execution of your vision.</div>
        </section>
    )
}

export default Banner_services;