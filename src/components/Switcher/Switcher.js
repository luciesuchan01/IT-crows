import React from 'react';
import './Switcher.css';
import Arrow from './images/right_arrow.svg';
export default function Switcher() {
    
    return(
        /*
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
        */

        <div className="Switcher">
        <div class="form-container">
        <div className='form-title'>A BIT ABOUT YOU AND PROJECT</div>
            <form class="register-form">
                <input
                id="first-name"
                class="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                />
                <input
                id="email"
                class="form-field"
                type="text"
                placeholder="E-mail"
                name="email"
                />
                <input
                id="details"
                class="form-field"
                type="text"
                placeholder="Project details (optional)"
                name="details"
                />
                


                <button class="form-btn" type="submit">
                Start a project
                </button>
            </form>
    </div>
    </div>
    )
}

