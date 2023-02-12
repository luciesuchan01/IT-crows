import React from 'react'
import './Banner_graciano.css'
import banimg from "./images/banner_img.svg"
function Banner_graciano(){
    return(
        <section className='banner-graciano'> 
            <div className='graciano-title'>graciano</div>
            <div className='graciano-title-sec'>CR, E-COMMERCE, ART, EXHEBITIONS, 2022</div>
            <img src={banimg} alt="graciano title" className='img-grac'></img>

        </section>
    )
}

export default Banner_graciano;