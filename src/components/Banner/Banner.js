import React from 'react';
import './Banner.css';
import Logo from './images/image 6.svg';

export default function Banner() {
    return (
        <div className="Banner">
           <div className="got-project main-title-container">

            <h2 className="project title">
               <span>got</span>
               <img src={Logo} className="logo" /> 
               <span>project? </span>
            </h2>
           </div>

            <h2 className="got-solution title">
                 We are got solution!                 
            </h2>

            <h3 className="design-development title">
                Design & development house
            </h3>
        </div>
    )
}