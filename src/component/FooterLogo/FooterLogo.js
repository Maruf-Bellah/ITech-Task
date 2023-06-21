import React from 'react';
import logo from './logo@2x.svg';
import lang from './lang 1@2x.svg';
import './FooterLogo.css';


const FooterLogo = () => {
    return (
        <div className='container pt-5 mt-5'>
            <div className="row   row-cols-sm-7 row-cols-lg-7 row-cols-md-7 ">
                <div className="col cursor">
                    <img src={logo} width={'200px'} height={'50px'} alt="" />
                </div>
                <div className="col cursor">
                    <p>Home</p>
                </div>
                <div className="col cursor">
                    Pages
                </div>
                <div className="col cursor">
                    Portfolio
                </div>
                <div className="col cursor">
                    Blog
                </div>
                <div className="col cursor">
                    Contact
                </div>
                <div id='lang' className="col cursor">
                    <div className='d-flex align-items-center'>
                    <img className='img-fluid pb-3 ' src={lang} width={'4px'} alt="" />
                    {/* <h6 className='ps-1'><small>English  v</small></h6> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLogo;