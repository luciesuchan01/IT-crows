import React from 'react'
import './Project_task.css'
import  slider2  from './images/project-task1.svg'
import slider1 from './images/project-task2.svg'
import slider3 from './images/project-task3.svg'
function Project_task(){
    return(
        <section className='project-task'> 
            <div className='project-task-title'>project <font color = '#FFB800'>task</font></div>
            <div className='project-task-text'>Vivamus sed cursus sapien. Fusce sodales ornare risus sit amet pretium. 
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ullamcorper finibus rhoncus. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>


            <div className='image-first'>
                <img src={slider1} alt="" width="491" height="614"/>
            </div>
            <div className='image-second'>
                <img src={slider2} alt="" width="504" height="598"/>
            </div>
            <div className='image-third'>
                <img src={slider3} alt="" width="504" height="598"/>
            </div>
        </section>
    )
}

export default Project_task;