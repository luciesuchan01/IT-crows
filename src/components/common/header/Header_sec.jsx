import React from 'react'
import { Navbar } from '../../common';
import './Header_sec.css'

function Header_sec(){
    return(
        <section className='header-sec'>
            <section className='header-logo-sec'>

                <a href='/' className='header-logo-sec'>itcrows</a>
            </section>
            <section className= 'header-top_navbar'>
                <Navbar />
            </section>
        </section>
    )
}

export default Header_sec;