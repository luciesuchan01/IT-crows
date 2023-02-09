import React from 'react'
import './Solution.css'
import iphone2 from "./images/iphone2.svg"
import mac from "./images/mac-solution.svg"
import commas from "./images/commas.svg"
import coolGrac from "./images/coolGrac.svg"
function Solution(){
    return(
        <section className='solution'> 
            <div className='solution-title'>solution</div>
           <div className='solution-text-first'>Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper finibus rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
           <div className='solution-text-second'>Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper finibus rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
           <div className='grid-container-solution'>
                <div className='grid-item-solution'>
                    <div className='iphone'>
                        <img src={iphone2} alt="" />
                    </div>  
                </div>
                <div className='grid-item-solution'>
                    <div className='iphone'>
                        <img src={iphone2} alt=""/>  
                    </div>
                </div>
                <div className='grid-item-solution'>
                    <div className='iphone'>
                        <img src={iphone2} alt="" />  
                    </div>
                </div>
                <div className='grid-item-solution'>
                <div className='iphone'>
                    <img src={iphone2} alt=""/>  
                </div>
                </div>
            </div>
            <img src={mac} alt="mac view of graciano" width="1236" height="772" className='mac'/>  
            <img src={commas} alt="commas" width="35" height="31" className='commas'/> 
            <div className='solution-text-third'>“Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.”</div> 
            <img src={coolGrac} alt="graciano" width="113" height="112" className='coolGrac'/> 
            <div className='coolGrac-text'>Cool Graciano Owner</div>
            <div className='coolGrac-text-sec'>cio, c-level, ceo</div>

        </section>
    )
}

export default Solution;