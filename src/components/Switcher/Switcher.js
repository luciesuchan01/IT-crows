import React, { useState, useRef } from 'react';
import './Switcher.css';
import "../common/contact/Form.css"
import upld from './images/Upload_button.svg'
import emailjs from '@emailjs/browser';

export default function Switcher() {
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vvapz8i', 'template_uc2v38m', form.current, 'zPyVoTIpqjCkGWlvq')
          .then((result) => {
              console.log('SUCCESS!', result.text);
              alert('email sent!');
          }, (error) => {
              console.log('FAILED...', error.text);
              alert('Failed to send e-mail!');
          });
          e.target.reset()
      };
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
            <form className="register-form-sw" onSubmit={sendEmail} ref={form}>
                <input
                id="user_name"
                className="form-field-sw"
                type="text"
                placeholder="First Name"
                name="user_name"
                required
                />
                <input
                id="email"
                className="form-field-sw"
                type="text"
                placeholder="E-mail"
                name="user_email"
                required
                />
                <input
                id="details"
                className="form-field-sw"
                type="text"
                placeholder="Project details (optional)"
                name="message"
                required
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

