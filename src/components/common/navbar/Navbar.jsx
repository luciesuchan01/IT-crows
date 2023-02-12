import React from 'react';
import './Navbar.css'
function Navbar(){
    function toggleNav() {
        const nav = document.getElementById("nav");
        const burger = document.getElementById("burger");
    
        nav.classList.toggle("nav-active");
        burger.classList.toggle("burger-active");
    }
    return(
    
        <section>
            <nav id='nav'>
                <ul>

                    <li>
                        <a href="/about_us">about&nbsp;us</a>
                    </li>

                    <li>                
                        <a href='/our_work'>our&nbsp;work</a>

                    </li>

                    <li>
                        <a href='#'>services</a>
                        <ul> 

                        <li><a href="/services_development">development</a></li>

                        <li><a href="/services_design">design</a></li>
                        </ul></li>
                    {/*
                    <li>
                        <a href='/career'>career</a>
                        
                    </li>
                    */}
                    <li>
                        <a href='/contact'>contact</a>
            
                    </li>

                </ul>
            </nav>
            <div id="burger" onClick={toggleNav}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </section>
    )

}

export default Navbar;