import React from 'react'
import './Form.css'

import Instagram from './images/Instagram.svg';
import Facebook from './images/Facebook.svg';
import Be from './images/Be.svg';
import Linkedin from './images/Linkedin.svg';
import Youtube from './images/Youtube.svg';
import Sth from "./images/sth.svg"

function Form(){
    return(
        <section className='form'> 
            <div className='form-main-title'>Let's  <font color = '#FF4747' className = 'red-part'> talk</font></div>
            <div className='help-title'>
                how can we help you with?
            </div>
            <div className='buttons-first-row'>
                <a href='/services'>
                    <button type="submit" className='grey-button-first'>Web apps</button>
                </a> 
                <a href='/services'>
                    <button type="submit" className='red-button-first'>Custom software</button> 
                </a> 

                <a href='/services'>
                    <button type="submit" className='grey-button-second'>Website</button> 
                </a> 

                <a href='/services'>
                    <button type="submit" className='grey-button-third'>AI</button> 
                </a> 

                <a href='/services'>
                    <button type="submit" className='grey-button-fourth'>UI/UIX</button> 
                </a> 

                <a href='/services'>
                    <button type="submit" className='red-button-second'>Branding</button> 
                </a> 

                <a href='/services'>
                    <button type="submit" className='grey-button-fifth'>Webflow</button> 
                </a> 
            </div>
             


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
                        <input type="file" className='upload'/>
                        
                        <button class="form-btn" type="submit">
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
                <div className='lin'>
                    <a href=""><img src={Linkedin} alt="" /></a>
                </div>
                <div className='ytb'>
                    <a href=""><img src={Youtube} alt="" /></a>
                </div>
                <div className='sth'>
                    <a href=""><img src={Sth} alt="" /></a>
                </div>
            </div>
            <div className='email-title'>Contact</div>
            <div className='email-address'>hello@itcrows.com</div>

        </section>
    )
}

export default Form;