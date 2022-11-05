import React from 'react'
import graciano_picture from './images/case_graciano.png';

import './Cases.css'

function Cases(){
    return(
        <section className='cases'>
            <section className='cases-title'>
                our work
            </section>
            <div class="grid-container">
                <div class="grid-item">
                    <img src={graciano_picture} alt=""/>
                </div>
                {/*
                <div class="grid-item">
                    <img src={pujc_picture} alt=""/>
                    
                </div>
                */}
            </div>
        </section>
    )
}

export default Cases;