import React from 'react'
import { Navbar } from '../../common';
import './Header.css'

function Header(){
    return(
        <section className='header'>
            <section className='header-logo'>

                <a href='/' className='header-logo'>itcrows</a>
            </section>
            <section className= 'header-top_navbar'>
                <Navbar />
            </section>
        </section>
    )
}

export default Header;