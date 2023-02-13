import React from 'react';
import './Switcher.css';
import "../common/contact/Form.css"
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
        <div className="form-container-sw">
        <div className='form-title-sw'>A BIT ABOUT YOU AND PROJECT</div>
            <form className="register-form-sw" action='mailto:hello@itcrows.com' method='post' encType='text/plain'>
                <input
                id="first-name"
                className="form-field-sw"
                type="text"
                placeholder="First Name"
                name="firstName"
                />
                <input
                id="email"
                className="form-field-sw"
                type="text"
                placeholder="E-mail"
                name="email"
                />
                <input
                id="details"
                className="form-field-sw"
                type="text"
                placeholder="Project details (optional)"
                name="details"
                />
                <div className="image-upload-sw">
                    <label htmlFor="file-input">
                        <img src={upld} alt="" />
                    </label>

                    <input id="file-input" type="file" label="input file" placeholder='input file'/>
                </div>



                <button className="form-btn-sw" type="submit">
                Start a project
                </button>
            </form>
    </div>
    </div>
    )
}

