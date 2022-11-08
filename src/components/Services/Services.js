import React from 'react';
import './Services.css';
import ReadMoreBtn from './images/services button.png';

export default function Services (){
    return(
        <div className="Services">
            <div className="Main-title Services">
                <h2>We create</h2>
                <p>
                    Based on  <span className="Services-red-text">bussines analysis, user experience</span> and <br />
                   current  <span className="Services-red-text">technologies</span>
                </p>
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
                    <a href="#">
                        <img src={ReadMoreBtn} />
                    </a>
                </div>

                <div className="Design-box box">
                    <h3>Design</h3>
                    <ul>
                        <li>ui/ux</li>
                        <li>webflow</li>
                        <li>branding</li>
                    </ul>

                    <a href="#">
                        <img src={ReadMoreBtn} />
                    </a>
                </div>

            </div>

        </div>
    )
}