import React from 'react';
import populer from './Screenshot_10.png';
import populer1 from './Screenshot_11.png';

const Populer = () => {
    return (
        <div className=' text-center py-5'>
            <button className='btn notero-button'>One-Time Payment</button>
            <h1 className='py-3 fw-bolder'>Integration With <span className='text-color'>Popular Apps</span></h1>
            <p>Notero integrate with popular apps. Help you easy to connect and collaboration</p>
            <div>
                <img className='img-fluid' src={populer} alt="" />
            </div>
        </div>
    );
};

export default Populer;