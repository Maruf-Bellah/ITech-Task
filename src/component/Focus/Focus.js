import React from 'react';
import focus from './about_s4_img3 1@2x.png';
import './Focus.css';

const Focus = () => {
    return (
        <div className='container-fluid py-5'>
            <div className="row">

                <div className="col-md-7">
                    <div id='focus'>
                        <img className='img-fluid p-sm-5' width={'500px'} src={focus} alt="" />
                    </div>
                </div>
                <div className="col-md-5">
                    <button className='btn notero-button'>Beautiful Themes</button>
                    <h1 className='py-3 fw-bolder'>Focus More With <br />
                        <span className='text-color'>      Dark Theme</span></h1>
                    <p className='pe-sm-5 me-sm-5'>Apply Notero’s elegant themes to your taste. Dark themes work excellently for those who prefer distraction-free mode.</p>

                    <ul className='py-3'>
                        <li>Filtering notes using matched keywords</li>
                        <li className='fw-bolder'>8 Beautiful themes for you select</li>
                        <li>Save energy for your device</li>
                        <li>Easy to switch between light and dark mode </li>
                    </ul>

                    <button className='btn comon'>Discovery Now</button>
                </div>
            </div>

        </div>
    );
};

export default Focus;