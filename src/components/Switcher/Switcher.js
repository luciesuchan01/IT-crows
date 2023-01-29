import React from 'react';
import './Switcher.css';
import Arrow from './images/right_arrow.svg';

export default function Switcher() {
    
    return(
        
        <div className="Switcher">
            <h2 className="Switcher-title">
                Switch 

        <span className="Span-label">
                <label className="Switch-label">
                    <input type="checkbox" className="Switch-input" value={1}/>
                    <span className="slider round"></span>
                </label>
        </span>

                 your <span className="Switcher-red-text"> business </span>  <br />
                to the <span className="Switcher-red-text"> next level </span> 
            </h2>

            <a href="/contact">
                <input type="submit" className="Switcher-project-btn" value="Discuss a project"/>
            </a>

        </div>
    )
}

