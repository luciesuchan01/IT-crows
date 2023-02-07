import React from 'react';
import './Switcher.css';
import "../common/contact/Form.css"
import Arrow from './images/right_arrow.svg';
import upld from './images/Upload_button.svg'

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
        <div class="form-container-sw">
        <div className='form-title-sw'>A BIT ABOUT YOU AND PROJECT</div>
            <form class="register-form-sw" action='mailto:hello@itcrows.com' method='post' encType='text/plain'>
                <input
                id="first-name"
                class="form-field-sw"
                type="text"
                placeholder="First Name"
                name="firstName"
                />
                <input
                id="email"
                class="form-field-sw"
                type="text"
                placeholder="E-mail"
                name="email"
                />
                <input
                id="details"
                class="form-field-sw"
                type="text"
                placeholder="Project details (optional)"
                name="details"
                />
                <div class="image-upload-sw">
                    <label for="file-input">
                        <img src={upld} alt="" />
                    </label>

                    <input id="file-input" type="file"/>
                </div>



                <button class="form-btn-sw" type="submit">
                Start a project
                </button>
            </form>
    </div>
    </div>
    )
}

