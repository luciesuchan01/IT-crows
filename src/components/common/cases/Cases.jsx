import React from 'react'
import todolist_picture from './images/todolist.svg'
import lorem_picture from './images/lorem.svg'
import ecommerce_picture from './images/ecommerce.svg'
import sipka_picture from './images/sipka.png'
import pujc_picture_sec from './images/pujc_sec.svg'
import cases_graciano_sec from './images/cases_graciano_sec.svg'

import './Cases.css'

function Cases(){
    return(
        <section className='cases'>
            <div className='plus-border'>
                <div className='plus-text'>20+</div>
            </div>
            <div className='cases-title'>
                our&nbsp;works
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className='grid-item-left'>
                        <div className='grac-img'>
                        <a href='/graciano'>
                        <img src={cases_graciano_sec} alt="graciano" width="100%"/>
                        </a>
                        </div>
                        <h1>graciano</h1>
                            <h2>
                                <div className='first-pic'>UI/UIX, develop, e-commerce</div>
                            </h2>      
                    </div>
                </div>                
                <div className="grid-item">
                    <div className="grid-item-right">
                            <div className='pujc-pic'>
                                <img src={pujc_picture_sec} alt="lending cars" width="130%"/>
                            </div>
                        
                        <h1>pujc</h1>
                            <h2>
                                <div className='second-pic'>UI/UX, develop</div>
                            </h2>
                        
                    </div>
                </div>
               

                <div className="grid-item">
                    <div className='grid-item-left'>
                        <div className='todo-img'>
                        <img src={todolist_picture} alt="todo list pic" width="100%"/>
                        </div>
                        <h1>todo list</h1>
                            <h2>
                                <div className='third-pic'>UI/UX, develop, app</div>
                            </h2>
                        
                    </div>

                </div>

                <div className="grid-item">
                    <div className="grid-item-right">
                    <div className='load-pic'>
                        <img src={lorem_picture} alt="loading" width="100%"/>
                    
                    <h1>lorem</h1>
                        <h2>
                            <div className='fourth-pic'>design, UI/UX</div>
                        </h2>
                    
                    </div>
                    </div>
                </div>
            </div>
            <div className='grid-container-second'>
                <div className='grid-item-second'>
                    <div className="grid-item-left">
                        <img src={ecommerce_picture} alt= "e-commerce" width="100%"/>
                    
                        <h1>lorem</h1>
                            <h2>
                                <div className='fifth-pic'>design, UI/UX, develop, e-commerce</div>
                            </h2>
                        
                    </div>
                </div>
            </div>
            <a href='/our_work' className='more-view-a' title='click for more examples'>

                <div className='more-view'>View more</div>
                    <img src={sipka_picture} alt="button" width="133" height="26"/>
            </a>
            
        </section>
    )
}

export default Cases;