import React from 'react';
import logo from './logo@2x.svg';
import lang from './lang 1@2x.svg';
import './FooterLogo.css';


const FooterLogo = () => {
    return (
        <div className='container pt-5 mt-5'>
            <div className="row   row-cols-sm-7 row-cols-lg-7 row-cols-md-7 justify-content-center  ">
                <div className="col cursor">
                    <img src={logo} width={'200px'}  alt="" />
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
                    <div className='col cursor d-flex align-items-center flex-rap'>
                    <img className='img-fluid pb-3 ' src={lang} width={'40px'} alt="" />
                    <h6 className='ps-1'><small>English  v</small></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLogo;