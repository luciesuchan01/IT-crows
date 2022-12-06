import React from 'react'
import './Services_page_webpages.css'
import loremImage from './images/lorem.png'
import todo from './images/todo.png'
import pujc from './images/pujc.png'

function Services_page_webpages(){
    return(
        <section className='Services-webpages'> 
            <div className='webpages-main-title'>webpages and e-commerce</div>

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
                    <div className='grid-text'>
                        what we do:
                    </div>
                </div>

                <div className='grid-item-webpage'>
                    <div className='grid-text'>
                    <div className='lorem-webpage'>     
                        <img src={loremImage} alt="" width="730" height="550"/>  
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


            <div className='grid-container-web'>
                <div className='grid-item-web'>
                    <div className='grid-text'>
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


            
            <div className='images'>
                <img src={todo} alt="" width="609" height="550"/>  
                <div className='images-text'>todo list</div>
                <div className='images-text-sec'>design, UI/UX</div>

                <div className='todo-photo'>
                    <img src={pujc} alt="" width="384" height="550"/>         
                    <div className='images-text'>pujc</div>
                    <div className='images-text-third'>design, UI/UX</div>   
                </div>
            </div>


        </section>
    )
}

export default Services_page_webpages;