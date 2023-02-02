import React from 'react'
import './Services_page_webpages.css'
import loremImage from './images/lorem.png'
import todo from './images/todo.png'
import pujc from './images/pujc.png'

function Services_page_webpages(){
    return(
        <section className='Services-webpages'> 
            <div className='webpages-main-title-services'>webpages and e-commerce</div>

            <div className='plus-border-webpages'>
                <div className='plus-text-webpages'>8+</div>
            </div>

             <div className='webpages-text'>
                Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                <font color = '#FF4747' className = 'red-text'> Orci varius</font> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<font color = '#FF4747' className = 'red-text'>  Sed ullamcorper finibus </font>rhoncus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
             </div>

            <div className='grid-container-webpage'>
                <div className='grid-item-webpage'>
                    <div className='grid-text-custom'>
                        what we do:
                    </div>
                </div>

                <div className='grid-item-webpage'>
                    <div className='grid-text'>
                    <div className='lorem-webpage'>     
                        <img src={loremImage} alt="" width="200%" height="200%"/>  
                        <div className='lorem-text'>lorem</div>
                        <div className='lorem-text-sec'>design, UI/UX</div>
                    </div>
                    </div>
                </div>

            </div>

            <div className='grid-container-webpage-sec'>
                <div className='grid-item-webpage-sec'>
                    <div className='grid-webpage-text'>
                        - Vivamus sed
                    </div>
                </div>
                
                <div className='grid-item-webpage-sec'>
                    <div className='grid-webpage-text'>
                    - Carsus sapien
                    </div>
                </div>
                
                <div className='grid-item-webpage-sec'>
                    <div className='grid-webpage-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
               
            </div>


            <div className='grid-container-webpage'>
                <div className='grid-item-webpage'>
                    <div className='grid-text-custom'>
                        read more:
                    </div>
                </div>

            </div>

            <div className='grid-container-web-sec'>
                <div className='grid-item-web-sec'>
                    <div className='grid-webpage-text'>
                    - <a href='/'>Vivamus sed</a>
                    </div>
                </div>
                
                <div className='grid-item-web-sec'>
                    <div className='grid-webpage-text'>
                    - <a href='/'>Carsus sapien</a>
                    </div>
                </div>
                
                <div className='grid-item-web-sec'>
                    <div className='grid-webpage-text'>
                    - <a href='/'>Fusce sodales ornare</a>
                    </div>
                </div>
            </div>


            
            <div className='grid-container-app'>
            <div className='grid-item-app'>
                <img src={todo} alt=""  className='todo-photo-app'/>  
                <div className='images-text-app'>todo list</div>
                <div className='images-text-sec-app'>design, UI/UX</div>
            </div>
                <div className='grid-item-app'>
                    <img src={pujc} alt="" className='pujc-photo-app'/>         
                    <div className='images-text-app'>pujc</div>
                    <div className='images-text-third-app'>design, UI/UX</div>   
                </div>
            </div>
        </section>
    )
}

export default Services_page_webpages;