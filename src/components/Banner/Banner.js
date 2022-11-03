import React from 'react';
import './Banner.css';
import Logo from './images/image 6.svg';

export default function Banner() {
    return (
        <div className="Banner">
           <div className="Main-title">
                <h2> 
                     <span className="red-text">Websites</span> and <br />
                     <span className="red-text"> apps </span> 
                     for 
                     <span className="changing-text">  </span>
                </h2>
           </div>

           <div className="title">
                <p>
                Based on business analysis, user experience and <br />
                current technologies. Based on business analysis, <br />
                user experience and current technologies.
                </p>
           </div>

           <div className="Get-in-touch button">
                <span className="Get-in-touch text">
                    Get in touch

                    !!! šipka !!!
                </span>
           </div>
           


        </div>
    )
}