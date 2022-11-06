import React from 'react'
import graciano_picture from './images/case_graciano.png';
import pujc_picture from './images/pujc.png'
import todolist_picture from './images/todolist.png'
import lorem_picture from './images/lorem.png'
import ecommerce_picture from './images/ecommerce.png'
import sipka_picture from './images/sipka.png'

import './Cases.css'

function Cases(){
    return(
        <section className='cases'>
            <section className='cases-title'>
                our work
            </section>
            <div class="grid-container">
                <div class="grid-item">
                    <img src={graciano_picture} alt="" width="650" height="600"/>
                   
                    <h1>graciano
                    <h2>
                        <div className='first-pic'>UI/UIX, develop, e-commerce</div>
                    </h2>
                    </h1>
                </div>                
                <div class="grid-item">
                    <div class = "pujc-border">
                        <div className='pujc-pic'>
                            <img src={pujc_picture} alt="" width="250" height="550"/>
                        </div>
                    </div>
                    <h1>pujc
                    <h2>
                        <div className='second-pic'>UI/UX, develop</div>
                    </h2>
                    </h1>
                </div>
               

                <div class="grid-item">
                    <img src={todolist_picture} alt="" width="550" height="600"/>
                    <h1>todo list
                        <h2>
                            <div className='third-pic'>UI/UX, develop, app</div>
                        </h2>
                    </h1>

                </div>

                <div class="grid-item">
                    <img src={lorem_picture} alt="" width="400" height="400"/>
                    <h1>lorem
                        <h2>
                            <div className='fourth-pic'>design, UI/UX</div>
                        </h2>
                    </h1>

                </div>
            </div>
            <div className='grid-container-second'>
                <div class="grid-item">
                    <img src={ecommerce_picture} alt="" width="1050" height="500"/>
                    <h1>lorem
                        <h2>
                            <div className='fifth-pic'>design, UI/UX, develop, e-commerce</div>
                        </h2>
                    </h1>

                </div>
            </div>
            <a href='/'>

                <div className='more-view'>View more</div>
                    <img src={sipka_picture} alt="" width="133" height="24"/>
            </a>

                
            
        </section>
    )
}

export default Cases;