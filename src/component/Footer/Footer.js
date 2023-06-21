import React from 'react';
import './Footer.css';
import Download from '../Download/Download';
import FooterLogo from '../FooterLogo/FooterLogo';
import FooterLast from '../FooterLogo/FooterLast/FooterLast';

const Footer = () => {
    return (
        <div id='main' className='container-fluid ' >
        <div className="">
                <div className="box" id="white">
                    <div id='feachureIcon' className=''>
             
                       <Download></Download>
                       <FooterLogo></FooterLogo>
                        <div className='breck'>
                            <hr />
                        </div>
                       <FooterLast></FooterLast>
                       <h1>hello how are you</h1>
                    </div>
                </div>
                <div className="d-none d-lg-block d-xl-block" id="blue">
                </div>
            </div>
    </div>
    );
};

export default Footer;