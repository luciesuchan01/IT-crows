import React from 'react';
import './Footer.css';



export default function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-Main">
                    <div className="Upper-Footer">
                        {/* LEVÝ HORNÍ  */}
                        <div className="Upper-Footer-left">
                            <h2>Get in touch</h2>
                            <input type="text" placeholder="Your name" />
                            <input type="text" placeholder="youremail@mail.com" />
                            <input type="text" placeholder="Explain, how we can help you?" />

                            <div className="Footer-checkbox">
                                <input type="checkbox" name="checkbox" id="" />
                                <label for="checkbox">I have read and understand ITCROWS Privacy Notice.</label>
                            </div>

                            <a href="#" className="Upper-Footer-left anchor">
                                <butto className="Upper-Footer-left button">
                                    Send Message
                                </butto>
                            </a>
                        </div>

                        {/* PRAVÝ HORNÍ  */}
                        <div className="Upper-Footer-right">
                            <p>YYY</p>
                        </div>
                    </div>
                    
     {/* DĚLÍCÍ ČÁRA */}
     <p>
        <hr className="Footer-Line" />
     </p>

                    <div className="Lower-Footer">
                        <div className="Lower-Footer-left">
                            <h2>Brno <span>XX image</span></h2>
                            <p>Ponávka 185/2, Brno 602 00</p>
                            <p>+420 730 958 935</p>
                            <p>HELLO@ITCROWS.COM</p>
                        </div>

                        <div className="Lower-Footer-right">
                            <h2>IT crows <span>XX image</span></h2>
                                <div className="Firt-Line-Navigation">
                                    <a href="">XX</a>
                                    <a href="">YY</a>
                                    <a href="">ZZ</a>
                                </div>

                                <div className="Second-Line-Navigation">
                                    <a href="">XXX</a>
                                    <a href="">YYY</a>
                                    <a href="">ZZZ</a>
                                </div>
                        </div>
                    </div>
   

    <div className="Post-Footer">
            <div className="Post-Footer-up">
                <p>XXXXXXXXX</p>
            </div>

     {/* DĚLÍCÍ ČÁRA */}
     <p>
        <hr className="Footer-Line" />
     </p>

            <div className="Post-Footer-down">
                <p>YYYYYYYYYY</p>
            </div>
        </div>

            </div>
        </div>
    )
}