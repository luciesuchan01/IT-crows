import React from 'react'
import graciano_picture from './images/case_graciano.png';
import pujc_picture from './images/pujc.png'
import todolist_picture from './images/todolist.svg'
import lorem_picture from './images/lorem.svg'
import ecommerce_picture from './images/ecommerce.svg'
import sipka_picture from './images/sipka.png'
import pujc_picture_sec from './images/pujc_sec.svg'
import cases_graciano_sec from './images/cases_graciano_sec.svg'

import './Cases.css'

function Cases(){
    return(
        <block>
        <section className='cases'>
            <div className='plus-border'>
                <div className='plus-text'>20+</div>
            </div>
            <div className='cases-title'>
                our&nbsp;works
            </div>
            <div class="grid-container">
                <div class="grid-item">
                    <div className='grid-item-left'>
                        <div className='grac-img'>
                        <a href='/graciano'>
                        <img src={cases_graciano_sec} alt="graciano image" width="100%"/>
                        </a>
                        </div>
                        <h1>graciano
                        <h2>
                            <div className='first-pic'>UI/UIX, develop, e-commerce</div>
                        </h2>
                        </h1>
                    </div>
                </div>                
                <div class="grid-item">
                    <div class="grid-item-right">
                            <div className='pujc-pic'>
                                <img src={pujc_picture_sec} alt="image of lending cars" width="130%"/>
                            </div>
                        
                        <h1>pujc
                        <h2>
                            <div className='second-pic'>UI/UX, develop</div>
                        </h2>
                        </h1>
                    </div>
                </div>
               

                <div class="grid-item">
                    <div className='grid-item-left'>
                        <div className='todo-img'>
                        <img src={todolist_picture} alt="todo list pic" width="100%"/>
                        </div>
                        <h1>todo list
                            <h2>
                                <div className='third-pic'>UI/UX, develop, app</div>
                            </h2>
                        </h1>
                    </div>

                </div>

                <div class="grid-item">
                    <div class="grid-item-right">
                    <div className='load-pic'>
                        <img src={lorem_picture} alt="loading image" width="100%"/>
                    
                    <h1>lorem
                        <h2>
                            <div className='fourth-pic'>design, UI/UX</div>
                        </h2>
                    </h1>
                    </div>
                    </div>
                </div>
            </div>
            <div className='grid-container-second'>
                <div className='grid-item-second'>
                    <div class="grid-item-left">
                        <img src={ecommerce_picture} alt= "e-commerce" width="100%"/>
                    
                        <h1>lorem
                            <h2>
                                <div className='fifth-pic'>design, UI/UX, develop, e-commerce</div>
                            </h2>
                        </h1>
                    </div>
                </div>
            </div>
            <a href='/our_work' className='more-view-a'>

                <div className='more-view'>View more</div>
                    <img src={sipka_picture} alt="button" width="133" height="24"/>
            </a>

                
            
        </section>
        </block>
    )
}

export default Cases;