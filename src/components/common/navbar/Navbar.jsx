import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
    
        <section>
            <nav>
                <ul>

                    <li>
                        <a href="/about_us">about us</a>
                    </li>

                    <li>                
                        <a href='/our_work'>our work</a>

                    </li>

                    <li>
                        <a href='#'>services</a>
                        <ul> 

                        <li><a href="/services">development</a></li>

                        <li><a href="/services_design">design</a></li>
                        </ul></li>
                    
                    <li>
                        <a href='/career'>career</a>
                        
                    </li>
                    <li>
                        <a href='/contact'>contact</a>
            
                    </li>

                </ul>
            </nav>
        </section>
    )

}

export default Navbar;