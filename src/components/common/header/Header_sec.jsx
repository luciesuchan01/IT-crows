import React from 'react'
import { Navbar } from '../../common';
import {Link} from 'react-router-dom'
import './Header_sec.css'

function Header_sec(){
    return(
        <section className='header-sec'>
            <section className='header-logo-sec'>

                <Link to='/' className='header-logo-sec'>itcrows</Link>
            </section>
            <section className= 'header-top_navbar'>
                <Navbar />
            </section>
        </section>
    )
}

export default Header_sec;