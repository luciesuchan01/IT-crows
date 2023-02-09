import React from 'react'
import './Webpages_design.css'
import loremImage from './images/lorem.png'
import todo from './images/todo.svg'
import pujc from './images/pujc.svg'

function Webpages_design(){
    return(
        <section className='webpages-design'> 
            <div className='webpages-main-title'>branding</div>

            <div className='plus-border-webpages-design'>
                <div className='plus-text-webpages-design'>8+</div>
             </div>

             <div className='webpages-design-text'>
                Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                <font color = '#FF4747' className = 'red-text'> Orci varius</font> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<font color = '#FF4747' className = 'red-text'>  Sed ullamcorper finibus </font>rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
             </div>

             <div className='grid-container-webpage-design'>
                <div className='grid-item-webpage-design'>
                    <div className='grid-text-des-web'>
                        what we do:
                    </div>
                </div>

                <div className='grid-item-webpage-design'>
                    <div className='grid-text'>
                    <div className='lorem-webpage-des'>     
                        <img src={loremImage} alt="loading page image" width="730" height="550"/>  
                        <div className='lorem-text'>lorem</div>
                        <div className='lorem-text-sec'>design, UI/UX</div>
                    </div>
                    </div>
                </div>

            </div>

            <div className='grid-container-webpage-design-sec'>
            <div className='grid-item-web-page-sec'>
                    <div className='grid-webpage-design-text'>
                        - Vivamus sed
                    </div>
                </div>
                
                <div className='grid-item-web-page-sec'>
                <div className='grid-webpage-design-text'>
                    - Carsus sapien
                    </div>
                </div>
                
                <div className='grid-item-web-page-sec'>
                    <div className='grid-webpage-design-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
               
            </div>


            <div className='grid-container-web-page'>
                <div className='grid-item-web-page'>
                    <div className='grid-text-des-web'>
                        read more:
                    </div>
                </div>

            </div>

            <div className='grid-container-web-page-sec'>
                <div className='grid-item-web-page-sec'>
                <div className='grid-webpage-design-text'>
                    - <a href='/'>Vivamus sed</a>
                    </div>
                </div>
                
                <div className='grid-item-web-page-sec'>
                <div className='grid-webpage-design-text'>
                    - <a href='/'>Carsus sapien</a>
                    </div>
                </div>
                
                <div className='grid-item-web-page-sec'>
                <div className='grid-webpage-design-text'>
                    - <a href='/'>Fusce sodales ornare</a>
                    </div>
                </div>
            </div>


            
            <div className='grid-container-app'>
            <div className='grid-item-app'>
                <img src={todo} alt="todo list image"  className='todo-photo-app-des'/>  
                <div className='images-text-des'>todo list</div>
                <div className='images-text-sec-des'>design, UI/UX</div>
            </div>
                <div className='grid-item-app'>
                    <img src={pujc} alt="lending cars image" className='pujc-photo-app-des'/>         
                    <div className='images-text-des'>pujc</div>
                    <div className='images-text-third-des'>design, UI/UX</div>   
                </div>
            </div>
        </section>
    )
}

export default Webpages_design;