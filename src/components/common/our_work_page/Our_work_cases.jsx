import React from 'react'
import './Our_work_cases.css'
import graciano from './images/graciano.png'
import lorem from './images/lorem.png'
import todolist from './images/todolist.png'
import pujc from './images/pujc.png'
import lorem2 from './images/lorem2.png'

function Our_work_cases(){
    return(
        <section className='cases_our_work'> 
            <div className='plus-border-our-work'>
                <div className='plus-text-our-work'>20+</div>
             </div> 
          <div className='cases-main-title'>our works</div> 


          <div class="grid-container-our-work">
                <div class="grid-item-our-work">
                    <div class="grid-item-left-our-work">

                        <img src={graciano} alt="" width="730" height="550"/>
                        <h1>graciano
                        <h2>
                            <div className='first-pic'>UI/UIX, develop, e-commerce</div>
                        </h2>
                        </h1>
                    </div>
                </div>                
                <div class="grid-item-our-work">
                    <div class="grid-item-right-our-work">
                                <img src={ pujc } alt="" width="380" height="550"/>

                        <h1>pujc
                        <h2>
                            <div className='second-pic'>UI/UX, develop</div>
                        </h2>
                        </h1>
                    </div>
                </div>
               

                <div class="grid-item-our-work">
                    <div className='grid-item-left'>
                        <img src={todolist} alt="" width="609" height="550"/>
                    
                        <h1>todo list
                            <h2>
                                <div className='third-pic'>UI/UX, develop, app</div>
                            </h2>
                        </h1>
                    </div>

                </div>

                <div class="grid-item-our-work">
                    <div class="grid-item-right">
                    <div className='load-pic'>
                        <img src={lorem} alt="" width="450" height="550"/>
                    
                    <h1>lorem
                        <h2>
                            <div className='fourth-pic'>design, UI/UX</div>
                        </h2>
                    </h1>
                    </div>
                    </div>
                </div>
            </div>
            <div className='grid-container-second-our-work'>
                <div className='grid-item-second-our-work'>
                    <div class="grid-item-left-our-work">
                        <img src={lorem2} alt="" width="1114" height="550"/>
                    
                        <h1>lorem
                            <h2>
                                <div className='fifth-pic'>design, UI/UX, develop, e-commerce</div>
                            </h2>
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mezera'></div>

            <div class="grid-container-our-work">
                <div class="grid-item-our-work">
                    <div class="grid-item-left-our-work">

                        <img src={graciano} alt="" width="730" height="550"/>
                        <h1>graciano
                        <h2>
                            <div className='first-pic'>UI/UIX, develop, e-commerce</div>
                        </h2>
                        </h1>
                    </div>
                </div>                
                <div class="grid-item-our-work">
                    <div class="grid-item-right-our-work">
                                <img src={ pujc } alt="" width="380" height="550"/>

                        <h1>pujc
                        <h2>
                            <div className='second-pic'>UI/UX, develop</div>
                        </h2>
                        </h1>
                    </div>
                </div>
               

                <div class="grid-item-our-work">
                    <div className='grid-item-left'>
                        <img src={todolist} alt="" width="609" height="550"/>
                    
                        <h1>todo list
                            <h2>
                                <div className='third-pic'>UI/UX, develop, app</div>
                            </h2>
                        </h1>
                    </div>

                </div>

                <div class="grid-item-our-work">
                    <div class="grid-item-right">
                    <div className='load-pic'>
                        <img src={lorem} alt="" width="450" height="550"/>
                    
                    <h1>lorem
                        <h2>
                            <div className='fourth-pic'>design, UI/UX</div>
                        </h2>
                    </h1>
                    </div>
                    </div>
                </div>
            </div>
            <div className='grid-container-second-our-work'>
                <div className='grid-item-second-our-work'>
                    <div class="grid-item-left-our-work">
                        <img src={lorem2} alt="" width="1114" height="550"/>
                    
                        <h1>lorem
                            <h2>
                                <div className='fifth-pic'>design, UI/UX, develop, e-commerce</div>
                            </h2>
                        </h1>
                    </div>
                </div>
            </div>
          
        </section>
    )
}

export default Our_work_cases;

