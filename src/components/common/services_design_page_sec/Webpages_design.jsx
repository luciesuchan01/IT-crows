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
                    <div className='grid-text'>
                        what we do:
                    </div>
                </div>

                <div className='grid-item-webpage-design'>
                    <div className='grid-text'>
                    <div className='lorem-webpage'>     
                        <img src={loremImage} alt="" width="730" height="550"/>  
                        <div className='lorem-text'>lorem</div>
                        <div className='lorem-text-sec'>design, UI/UX</div>
                    </div>
                    </div>
                </div>

            </div>

            <div className='grid-container-webpage-design-sec'>
                <div className='grid-item-webpage-design-sec'>
                    <div className='grid-webpage-design-text'>
                        - Vivamus sed
                    </div>
                </div>
                
                <div className='grid-item-webpage-design-sec'>
                    <div className='grid-webpage-design-text'>
                    - Carsus sapien
                    </div>
                </div>
                
                <div className='grid-item-webpage-design-sec'>
                    <div className='grid-webpage-design-text'>
                    - Fusce sodales ornare
                    </div>
                </div>
               
            </div>


            <div className='grid-container-web-page'>
                <div className='grid-item-web-page'>
                    <div className='grid-text'>
                        read more:
                    </div>
                </div>

            </div>

            <div className='grid-container-web-page-sec'>
                <div className='grid-item-web-page-sec'>
                    <div className='grid-webpage-text'>
                    - <a href='/'>Vivamus sed</a>
                    </div>
                </div>
                
                <div className='grid-item-web-page-sec'>
                    <div className='grid-webpage-text'>
                    - <a href='/'>Carsus sapien</a>
                    </div>
                </div>
                
                <div className='grid-item-web-page-sec'>
                    <div className='grid-webpage-text'>
                    - <a href='/'>Fusce sodales ornare</a>
                    </div>
                </div>
            </div>


            
            <div className='images'>
                <img src={todo} alt="" width="50%" height="550"/>  
                <div className='images-text'>todo list</div>
                <div className='images-text-sec'>design, UI/UX</div>

                <div className='todo-photo'>
                    <img src={pujc} alt="" width="100%" height="550"/>         
                    <div className='images-text'>pujc</div>
                    <div className='images-text-third'>design, UI/UX</div>   
                </div>
            </div>
        </section>
    )
}

export default Webpages_design;