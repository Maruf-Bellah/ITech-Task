import React from 'react';
import './Customer.css';
import one from './testi_s4_ic1@2x.png';
import two from './testi_s4_ic2@2x.png';
import three from './user4@2x.png';
import four from './user6@2x.png';
import five from './user5@2x.png';
import six from './Polygon 3@2x.png';


const Customer = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6">
                    <button className='btn notero-button'>Testimonials</button>
                    <h1 className='py-3 fw-bolder'>Loved From <span className='text-color'>Customers</span></h1>
                    <p className='p-2 '>Notero loved from thoudsands customer worldwide and get trusted from big companies.</p>
                    <div className='castomer py-2'>
                        <div>
                            <img className='img-fluid me-2' src={one} width={'108px'} alt="" />
                            <h1 className='color fw-bolder py-2'>2,5M+</h1>
                            <p>Downloaded and <br />
                                Installation</p>
                        </div>
                        <div id='middle'></div>
                        <div>
                            <img className='img-fluid ms-3' src={two} width={'90px'} alt="" />
                            <h1 className='color fw-bolder pt-2'>4.8/5</h1>
                            <p className='star'> &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                            <p>Based on 1,258 reviews</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pt-2">
                            <button className='btn py-3 comon rounded-pill '>See Reviews on app store</button>
                        </div>
                        <div className="col">
                        <div id='vedio' className='botton-icon '>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={six} width={'30px'} alt="" />
                                    </div>
                                    <div id='viw'>
                                        <p>Viw </p>
                                        <p>Promotion</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div id='world' className="col-md-6">
                    <div className='d-flex align-items-center lh-1 shadow p-2 me-sm-5 mb-5 bg-body-tertiary rounded'>
                        <div>
                            <img src={three} width={'92px'} alt="" />
                        </div>
                        <div>
                            <p className='star'> &#9733;   &#9733;   &#9733;   &#9733;   &#9733; </p>
                        <p className='text-small'>“You can even send emails to Evernote and gatherall <br /> of the things you need in a single place.”</p>
                            <p className='another-text'>    <small>JURGEN K. / Senior Marketing At <span className='another-color'>Brator</span></small></p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center lh-1 shadow p-2 mb-5 ms-sm-5 bg-body-tertiary rounded'>
                        <div>
                            <img src={five} width={'92px'} alt="" />
                        </div>
                        <div>
                            <p className='star'> &#9733;   &#9733;   &#9733;   &#9733;   &#9733; </p>
                        <p  className='text-small'>“Notero - 1st my choice for notes app. Awesome”</p>
                            <p className='another-text'>    <small>FODEN P. / Director At <span className='another-color'> Ecoland Resort</span> </small></p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center lh-1 shadow p-2 me-sm-5 mb-5 bg-body-tertiary rounded'>
                        <div>
                            <img src={four} width={'92px'} alt="" />
                        </div>
                        <div>
                            <p className='star'> &#9733;   &#9733;   &#9733;   &#9733;   &#9733; </p>
                        <p className='text-small'>“.This app is seriously good. It’s simple, clean anda real joy to use.”</p>
                            <p  className='another-text'>    <small>KERRY T. / Designer At <span className='another-color'> Teckzone Inc</span></small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Customer;