import React from 'react'
import './Form.css'

function Form(){
    return(
        <section className='form'> 
            <div className='form-main-title'>Let's  <font color = '#FF4747' className = 'red-part'> talk</font></div>
            <div className='help-title'>
                how can we help you with?
            </div>
            <div className='buttons-first-row'>
                <button type="submit" className='grey-button-first'>Web apps</button> 
                <button type="submit" className='red-button-first'>Custom software</button> 
                <button type="submit" className='grey-button-second'>Website</button> 
                <button type="submit" className='grey-button-third'>AI</button> 
                <button type="submit" className='grey-button-fourth'>UI/UIX</button> 
                <button type="submit" className='red-button-second'>Branding</button> 
                <button type="submit" className='grey-button-fifth'>Webflow</button> 
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
                        
                        <button class="form-btn" type="submit">
                        Start a project
                        </button>
                    </form>
            </div>
        

        </section>
    )
}

export default Form;