import React from 'react';
import './Services.css';
import ReadMoreBtn from './images/services button.png';

export default function Services (){
    return(
        <div className="Services">
            <div className="main-title Services">
                <div className='main'>We&nbsp;create</div>
                <div className='text-services'>
                    Based on  <span className="Services-red-text">bussines analysis, user experience</span> and 
                   current  <span className="Services-red-text">technologies</span>
                </div>
            </div>
            
            <div className="Services-boxes">
                <div className="Development-box box">
                    <h3>Development</h3>
                    <ul>
                        <li>Web apps</li>
                        <li>custom software</li>
                        <li>ai</li>
                        <li>websites</li>
                        <li>e-comerce</li>
                    </ul>
                    <a href="/services">
                        <img src={ReadMoreBtn} alt="read more button" className="button-services"/>
                    </a>
                </div>

                <div className="Design-box box">
                    <h3>Design</h3>
                    <ul>
                        <li>ui/ux</li>
                        <li>webflow</li>
                        <li>branding</li>
                    </ul>
                        <a href="/services_design">
                            <img src={ReadMoreBtn} alt="read more button"  className="button-services"/>
                        </a>
                </div>

            </div>

        </div>
    )
}