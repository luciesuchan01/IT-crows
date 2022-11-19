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
        <block>
        <section className='cases'>
            <div className='plus-border'>
                <div className='plus-text'>20+</div>
            </div>
            <div className='cases-title'>
                our works
            </div>
            <div class="grid-container">
                <div class="grid-item">
                    <div className='grid-item-left'>
                        <img src={graciano_picture} alt="" width="730" height="550"/>
                    
                        <h1>graciano
                        <h2>
                            <div className='first-pic'>UI/UIX, develop, e-commerce</div>
                        </h2>
                        </h1>
                    </div>
                </div>                
                <div class="grid-item">
                    <div class="grid-item-left">
                        <div class = "pujc-border">
                            <div className='pujc-pic'>
                                <img src={pujc_picture} alt="" width="248" height="505"/>
                            </div>
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
                        <img src={todolist_picture} alt="" width="609" height="550"/>
                    
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
                        <img src={lorem_picture} alt="" width="450" height="550"/>
                    
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
                        <img src={ecommerce_picture} alt="" width="1114" height="550"/>
                    
                        <h1>lorem
                            <h2>
                                <div className='fifth-pic'>design, UI/UX, develop, e-commerce</div>
                            </h2>
                        </h1>
                    </div>
                </div>
            </div>
            <a href='/view-more' className='more-view-a'>

                <div className='more-view'>View more</div>
                    <img src={sipka_picture} alt="" width="133" height="24"/>
            </a>

                
            
        </section>
        </block>
    )
}

export default Cases;