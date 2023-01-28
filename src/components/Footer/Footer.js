import React from 'react';
import './Footer.css';
import Crows from './images/crows.svg';
import Pointer from './images/Pointer.svg';
import RightArrow from './images/RightArrow.svg';
import Instagram from './images/Instagram.svg';
import Facebook from './images/Facebook.svg';
import Be from './images/Be.svg';
import Linkedin from './images/Linkedin.svg';
import Youtube from './images/Youtube.svg';
import FooterImage from './images/footer_image.jpg'



export default function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-Main">
                    <div className="Upper-Footer">
                        {/* LEVÝ HORNÍ  */}
                        <div className="Upper-Footer-left">
                            
                            <h2>Get in touch</h2>
                            <div className='Upper-Footer-left-text'>
                                <input type="text" placeholder="Your name" />
                                <input type="text" placeholder="youremail@mail.com" />
                                <input type="text" placeholder="Explain, how we can help you?" />
                            </div>
                            
                            <div className="Footer-checkbox">
                                <input type="checkbox" name="checkbox" id="" />
                                <label for="checkbox">I have read and understand ITCROWS Privacy Notice.</label>
                            </div>

                            <a href="#" className="Upper-Footer-left anchor">
                                <button className="Upper-Footer-left button">
                                    Send Message <img src={RightArrow} alt="" />
                                </button>
                            </a>
                        </div>

                        {/* PRAVÝ HORNÍ  */}
                        <div className="Upper-Footer-right">
                            {/*
                        <img src={FooterImage} alt="" className='footer-image'/>
                            */}
                            <div className='upper-right-text'>
                                BIG BIG_cheese
                                BIG_cheese@itcrows.com
                            +420 123 123 123
                            </div>
                         
                        </div>
                        
                    </div>
                    <div className='upr'>
                        <div className='upper-right-text-low'>
                            head of design
                        </div>
                        <div className='upper-right-text-low'>
                            head of developing
                        </div>
                        <div className='upper-right-text-low'>
                            strategist
                        </div>
                    </div>
                    
                    
     {/* DĚLÍCÍ ČÁRA */}
     <p>
        <hr className="Footer-Line" />
     </p>

                    <div className="Lower-Footer">
                        <div className="Lower-Footer-left">
                            <h2>Brno <span><img src={Pointer} alt="" /></span></h2>
                            <div className='Lower-Footer-left-text'>
                                <p>Ponávka 185/2, Brno 602 00</p>
                                <p>+420 730 958 935</p>
                                <p>HELLO@ITCROWS.COM</p>
                            </div>
                        </div>

                        <div className="Lower-Footer-right">
                            <h2>IT crows <span> <img src={Crows} alt="" /></span></h2>
                                <div className='Lower-Footer-right-text'>
                                    <div className="First-Line-Navigation">
                                        <a href="">Contact</a>
                                        <a href="">Blog</a>
                                        <a href="/about_us" className="Footer-Red-Text">About us</a>
                                    </div>

                                    <div className="Second-Line-Navigation">
                                        <a href="">Our work</a>
                                        <a href="">Careers</a>
                                        <a href="">Services</a>
                                    </div>
                                </div>
                        </div>
                    </div>
   

    <div className="Post-Footer">
            <div className="Post-Footer-up">
                <a href="https://www.instagram.com/_itcrows/"><img src={Instagram} alt="" /></a>
                <a href="https://www.facebook.com/itcrows"><img src={Facebook} alt="" /></a>
                <a href=""><img src={Be} alt="" /></a>
                <a href=""><img src={Linkedin} alt="" /></a>
                <a href=""><img src={Youtube} alt="" /></a>
            </div>
     {/* DĚLÍCÍ ČÁRA */}
     <p>
        <hr className="Footer-Line-Post-Footer" />
     </p>

            <div className="Post-Footer-down">
                <p>
                    IČO 02542072 <br />
                    DIČ CZ02542072      
                </p>

                <p>
                    ITCROWS S.R.O. <br />
                    LOREM IPSUM DOLOR 419/420
                </p>

                <p>
                    Městský soud v Praze, <br />
                    Vložka 220046 C
                </p>
            </div>
        </div>

            </div>

        </div>
    )
}