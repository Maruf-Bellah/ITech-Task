import React from 'react';
import one from './Apple Logo@2x.png';
import two from './Google Play@2x.png';
import './Download.css';

const Download = () => {
    return (
        <div className='text-center pb-5 mb-5'>
            <h1 className='fw-bolder'>Ready To <span className='text-color'>Download</span></h1>
            < p className='p-3'>Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.</p>
            <div className=''>
                <div className='row row-cols-lg-2  row-cols-1'>
                    <div className="col text-lg-end py-2">
                       
                        <button className='btn comon rounded-pill'>
                        <div className='d-flex  text-center align-items-center '>
                            <div  className='down px-2'>
                                <img className='tmg-fluid' src={one} alt="" />
                            </div>
                            <div>
                                <p className='mt-3 '>|  Download App on app store</p>
                            </div>
                        </div>
                        </button>
                    </div>

            
                   <div className="col text-lg-start  py-2">
                       
                       <button className='btn btn-light border rounded-pill'>
                       <div className='d-flex   text-center align-items-center '>
                           <div  className='down px-2'>
                               <img className='tmg-fluid' src={two} alt="" />
                           </div>
                           <div>
                               <p className='mt-3 '>|  Download App on app store</p>
                           </div>
                       </div>
                       </button>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Download;