import React from 'react'
import './Project_task.css'
import slider_1 from './images/project-task2.svg'
import  slider_2  from './images/project-task1.svg'
import slider_3 from './images/project-task3.svg'
function Project_task(){
    return(
        <section className='project-task'> 
            <div className='project-task-title'>project <font color = '#FFB800'>task</font></div>
            <div className='project-task-text'>Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper finibus rhoncus. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>


            <div className='image-first-sec'>
                <img src={slider_1} alt="" width="130%" height="598"/>
            </div>
            <div className='image-second-sec'>
                <img src={slider_2} alt="" width="130%" height="598"/>
            </div>
            <div className='image-third-sec'>
                <img src={slider_3} alt="" width="130%" height="598"/>
            </div>
        </section>
    )
}

export default Project_task;