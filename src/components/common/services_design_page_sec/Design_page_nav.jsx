import React from 'react'
import './Design_page_nav.css'

function Design_page_nav(){
    return(
        <section className='design-page-nav'> 
            <div className='grid-container-services'>

                <div className='grid-item-design'>
                    <div className='nav-number-design'>01
                        <div className='nav-text-design'>
                                ui/uix
                        </div>
                    </div>
                </div>


                <div className='grid-item-design'>
                    <div className='nav-number-design'>02
                        <div className='nav-text-design'>
                            webflow
                        </div>
                    </div>
                </div>

                <div className='grid-item-design'>
                    <div className='nav-number-design'>03
                        <div className='nav-text-design'>
                            branding
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
    )
}

export default Design_page_nav;