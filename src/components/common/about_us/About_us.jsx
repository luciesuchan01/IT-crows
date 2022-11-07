import React from 'react'
import our_team_picture from './images/our_team.png'

import './About_us.css'

function About_us(){
    return(
        <section className='about_us'>
            <div className='grid-container-about-us'>
                <div className='grid-item-about-us'>
                    <div className='about_us_title'>
                            our team
                    </div>
                    <div className='text-about-us'>
                    Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Sed ullamcorper finibus rhoncus. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </div>
                    <a href = '/' className='read-more'>Read more</a>
                </div>
                <div className='grid-item-about-us'>
                    <div className='our_team_image'>
                        <img src={our_team_picture} alt="" width="518" height="450"/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About_us;