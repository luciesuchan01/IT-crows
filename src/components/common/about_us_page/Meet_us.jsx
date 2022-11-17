import React from 'react'
import './Meet_us.css'
import meet_us_pic from './images/meet-us.png'


function Meet_us(){
    return(
        <section className='meet-us'>
            <div className='meet-us-title'>
                Meet us
            </div>
            <div className='text-meet-us'>
            Valuable only <font color = '#FF4747' className = 'red-text'>new and unique.</font> That changes the usual order of things. 
            That gives a new experience. What astonishes. Only special people are able to create unique things. Those who are not afraid.
            </div>
            <div className='meet-us-pic'>
                <img src={meet_us_pic} alt="" width="900" height="429"/>
            </div>


            <div className='grid-container-meet-us'>
                <div className='grid-item-meet-us'>
                    <div className='text-grid'>30+</div>
                </div>
                <div className='grid-item-meet-us'>
                    <div className='text-grid'>20+</div>

                </div>
                <div className='grid-item-meet-us'>
                    <div className='text-grid'>2</div>

                </div>
            </div>


            <div className='grid-container-meet-us-second'>
                <div className='grid-item-meet-us-second'>
                    Websites created                
                </div>
                <div className='grid-item-meet-us-second'>
                    Clients
                </div>
                <div className='grid-item-meet-us-second'>
                    Years on marke

                </div>
            </div>


            <div className='story-of-creation'>Story of creation</div>
            <div className='text-meet-us'>
                <font color = '#FF4747' className = 'red-text'>Since 2019 </font> 
                two friends — a designer and a businessman founded the IT CROWS web agency to help brands be unique. 
                The agency has grown from 2 to more than 40 people and won 28 awards.
            </div>
            <div className='mezera'></div>
            <div className='text-meet-us'>
                The clients of the League Agency are 120 companies from 25 countries; all of them are ambitious entrepreneurs who create new, useful products and valuable services.
            </div>
        </section>
        
    )
}

export default Meet_us;