import React from 'react'
import { Navbar } from '../../common';

import './Header.css'

function Header(){
    return(
        <section className='header'>
            <section className='heade-top'>
                <section className='header-top_navbar_first'>
                    <Navbar />
                </section> {/*navbar */}
                 {/*
                <section className='header-top_logo'>
                    <a href='/' className='header-logo'>ITCROWS</a>
                </section> {/*logo 

               
                <section className='header-top_navbar_second'>
                    <Navbar />
                </section> 
                */}
            </section>
        </section>
    )
}

export default Header;