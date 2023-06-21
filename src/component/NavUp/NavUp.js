import React from 'react';
import './NavUp.css';
import emoji from './Smiling Face With Heart Eyes@2x.svg'

const NavUp = () => {
    return (
        <div id='nav'>
            <div className='text-center text-white pt-3 pt-sm-4'>
                <span><button className=' btn btn-light btn-sm px-4'>Specilal</button></span>
                <span className='p-1'>
                    <img className='' src={emoji} width={'30px'} alt="" />
                </span>
                <span className=''>Get</span>
                <span className='p-1 fw-bolder'>20% Discount</span>
                <span>get for new account</span>
                <span><a className='text-white p-1' href="#">Register now</a></span>

            
            </div>
        </div>
    );
};

export default NavUp;