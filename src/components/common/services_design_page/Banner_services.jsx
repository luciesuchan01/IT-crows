import React from 'react'
import './Banner_services.css'
import arrowServices from './images/arrowServices.png';
function Banner_services(){
    return(
        <section className='banner-services'> 
            <div className='banner-services-main-title'>we build</div>
            <div className='banner-services-title'>software solutions</div>
            <div className='Gint-button'>
                <a href="/contact">
                    <span className="Gint-text">
                        Get in touch
                        <div className='sipka-services'>
                            <img src={arrowServices} alt=""/>

                        </div>
                    </span>
                </a>
            </div>
            <div className='text-serv'>Keep up with customer and business demand in this era of rapid digitalization. We are your partners in strategy and execution of your vision.</div>
            
            
        </section>
    )
}

export default Banner_services;