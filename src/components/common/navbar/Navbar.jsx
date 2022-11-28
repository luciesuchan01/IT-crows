import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){

    return(
    
        <section>
            <nav>
                <ul>

                    <li>
                        <Link to="/about_us">about us</Link>
                    </li>

                    <li>                
                        <Link to='/our_work'>our work</Link>

                    </li>

                    <li>
                        <Link to='/services'>services</Link>

                    </li>
                    
                    <li>
                        <Link to='/career'>career</Link>
            
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
            
                    </li>

                </ul>
            </nav>
        </section>
    )

}

export default Navbar;