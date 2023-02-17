import React, { useState, useRef } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';


import Instagram from './images/Instagram.svg';
import Facebook from './images/Facebook.svg';
import Be from './images/Be.svg';
import upld from './images/Upload_button.svg'


function Form(){
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
        <section className='form'> 
            <div className='form-main-title'>Let's  <font color = '#FF4747' className = 'red-part'> talk</font></div>
            <div className='help-title'>
                how can we help you with?
            </div>
            {/*
            <div className='buttons-first-row'>
                <a href='/services_development'>
                    <button type="submit" className='grey-button-first'>Web apps</button>
                </a> 
                <a href='/services_development'>
                    <button type="submit" className='red-button-first'>Custom software</button> 
                </a> 

                <a href='/services_development'>
                    <button type="submit" className='grey-button-second'>Website</button> 
                </a> 

                <a href='/services_development'>
                    <button type="submit" className='grey-button-third'>AI</button> 
                </a> 

                <a href='/services_development'>
                    <button type="submit" className='grey-button-fourth'>UI/UIX</button> 
                </a> 

                <a href='/services_development'>
                    <button type="submit" className='red-button-second'>Branding</button> 
                </a> 

                <a href='/services_development'>
                    <button type="submit" className='grey-button-fifth'>Webflow</button> 
                </a> 
            </div>
             
*/}

            <div className="form-container">
                <div className='form-title'>A BIT ABOUT YOU AND PROJECT</div>
                    <form ref = {form} className="register-form" onSubmit={sendEmail}>
                        <input id="first-name" className="form-field" type="text" placeholder="First Name" name="user_name" required/>
                        <input id="email" className="form-field" type="text" placeholder="E-mail" name="user_email" required/>
                        <input id="details" className="form-field" type="text" placeholder="Project details (optional)" name="message" required/>
                        
                        <div className="image-upload">
                            <label for="file-input">
                                <img src={upld} alt="" />
                            </label>

                            <input id="file-input" type="file" label="input file" placeholder='input file'/>
                        </div>

                        <button className="form-btn" type="submit">
                        Start a project
                        </button>
                    </form>
            </div>
            
            <div className='icons-title'>Follow</div>
            <div className="icons">
                <div className='ig'>
                    <a href="https://www.instagram.com/_itcrows/" ><img src={Instagram} alt=""/></a>
                </div>
                <div className='fb'>
                    <a href="https://www.facebook.com/itcrows"><img src={Facebook} alt="" /></a>
                </div>
                <div className='be'>
                    <a href=""><img src={Be} alt="" /></a>
                </div>

            </div>
            <div className='email-title'>Contact</div>
            <div className='email-address'>hello@itcrows.com</div>

        </section>
    )
}

export default Form;