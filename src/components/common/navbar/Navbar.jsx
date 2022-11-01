import React from 'react';
import './Navbar.css'
function Navbar(){

    return(
        <section>
            <nav>
                <ul>
                    <li>
                    <a href='/'>en</a>
                    {/** 
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">en</a></li>
                        <li><a class="dropdown-item" href="#">cz</a></li>
                    </ul>
                    */}
                    </li>
                    <li>
                    <a href='/'>our work</a>
                    </li>
                    <li>
                    <a href='/'>services</a>
                    </li>
                    <li>
                    <a href='/' className='header-logo'>
                        <img src="Vector.png"></img>
                        ITCROWS</a>
                    </li>
                    <li>
                    <a href='/'>company</a>
                    </li>
                    <li>
                    <button className='button'>Start project</button>
                    </li>

            </ul>
            </nav>
        </section>
    )

}

export default Navbar;