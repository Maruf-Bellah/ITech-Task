import React from 'react';
import header from './header_4 1.png';
import './Header2.css';
import one from './Apple Logo@2x.png';
import two from './Polygon 2@2x.png';
import three from './refresh@2x.png';
import four from './card@2x.png';

const Header2 = () => {
    return (
        <div className='container pt-5 mt-5'>
            <div class="row row-cols-lg-2 row-cols-1 text-lg-start text-md-start text-center">
                <div class=" col-md-6">
                    <button className='notero-button btn mb-3'>Notero-Easy Note App</button>
                    <h1 className='header-text '>Note <span className='text-color'> Your Everything</span>
                    </h1>
                    <h1 className='header-text lh-1'>   In One App</h1>
                    <p className='text-dark'>No Coding required to make customization. the live customizer has everything you need.</p>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col sm-text-center ">
                        <button className='btn comon rounded-pill'>
                        <div className='d-flex  text-center align-items-center '>
                            <div  className='down px-2'>
                                <img className='tmg-fluid' src={one} alt="" />
                            </div>
                            <div>
                                <p className='mt-3 '> <span className='ps-3'>|</span> Download App</p>
                            </div>
                        </div>
                        </button>
                        </div>
                        <div className="col">
                            <div className=''>
                                <div id='vedio' className='botton-icon '>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={two} width={'50px'} height={'50px'} alt="" />
                                    </div>
                                    <div id='viw'>
                                        <p>Viw </p>
                                        <p>Promotion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id='day' className='botton-icon w-100 '>
                                <span>
                                    <img className='img-fluid' src={three} width={'30px'} alt="" />
                                </span><small>Free 14 Days Trialownload App</small>
                            </div>
                        </div>
                        <div className="col">
                            <div id='card' className='botton-icon  w-75'>
                                <span>
                                    <img className='img-fluid' src={four} width={'30px'} alt="" />
                                </span>
                                <small className='ps-2'>4 One Time Payment</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div  class=" col-md-6">
                    <div id='header-img'>
                        <img className='img-fluid' src={header} alt="" />
                        <div id="gol-red" className='	d-none d-lg-block d-xl-block'></div>
                        <div id="gol-blue" className='	d-none d-lg-block d-xl-block'></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header2;