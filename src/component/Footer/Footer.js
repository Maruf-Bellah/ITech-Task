import React from 'react';
import './Footer.css';
import Download from '../Download/Download';
import FooterLogo from '../FooterLogo/FooterLogo';
import FooterText from '../FooterText/FooterText';



const Footer = () => {
    return (
        <div id='main' className='container-fluid ' >
        <div className="">
                <div className="box " id="white">
                    <div id='feachureIcon' className=''>
             
                       <Download></Download>
                       <FooterLogo></FooterLogo>
                 
                            <div id='footer-brek'>
                                <hr />
                            </div>
                      
                        <FooterText></FooterText>
             
                    </div>
                </div>
                <div className="d-none d-lg-block d-xl-block" id="blue">
                </div>
            </div>
    </div>
    );
};

export default Footer;