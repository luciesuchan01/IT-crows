import React from 'react'
import our_team_picture from './images/our_team.png'

import './About_us.css'

function About_us(){
    return(
        <block>
        <section className='about_us'>
            <div className='grid-container-about-us'>
                <div className='grid-item-about-us'>
                    <div className='about_us_title'>
                            our team
                    </div>
                    <div className='text-about-us'>
                    <font color = '#FF4747' className = 'red-text'> Vivamus sed cursus sapien.</font> Fusce sodales ornare risus sit amet pretium. 
                    <font color = '#FF4747' className = 'red-text'> Orci varius </font>natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    <font color= '#FF4747' className = 'red-text'> Sed ullamcorper finibus rhoncus. </font>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    </div>
                    <a href = '/read-more' className='read-more'>Read more</a>
                </div>
                <div className='grid-item-about-us'>
                    <div className='our_team_image'>
                        <img src={our_team_picture} alt="" width="618" height="556"/>
                    </div>
                </div>

            </div>
        </section>
        </block>
    )
}

export default About_us;