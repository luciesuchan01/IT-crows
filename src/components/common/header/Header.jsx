import React from 'react'
import { Navbar } from '../../common';
import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
    return(
        <section className='header'>
            <section className='header-logo'>

                <Link to='/' className='header-logo'>itcrows</Link>
            </section>
            <section className= 'header-top_navbar'>
                <Navbar />
            </section>
        </section>
    )
}

export default Header;