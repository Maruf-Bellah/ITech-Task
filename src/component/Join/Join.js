import React from 'react';
import one from './GitHub@2x.png';
import two from './Twitter@2x.png';
import three from './Telegram@2x.png';
import './Join.css';
const Join = () => {
    return (
        <div className='container text-center py-5'>
            <button className='btn notero-button'>Notero Community</button>
            <h1 className='py-3 fw-bolder'>Join Into <span className='text-color'>Our Hub</span></h1>
            <div id='join-border' className="row   rounded-4  m-1 p-4 row-cols-1 row-cols-lg-3">
                <div className="col">
                    <div className='d-flex align-items-center text-start'>
                        <div className=''>
                            <img className='img-fluid' src={one} width={'100px'} alt="" />
                        </div>
                        <div className='lh-1'>
                            <h3 className='fw-bolder'>GitHub</h3>
                            <p><small>Open Source & Commit Code</small></p>
                        </div>
                    </div>
                
                </div>
                <div className="col">
                    <div className='d-flex align-items-center text-start'>
                        <div className='join'>
                            <img className='img-fluid' src={two} width={'40px'} alt="" />
                        </div>
                        <div className='lh-1'>
                            <h3 className='fw-bolder'>Tweeter</h3>
                            <p><small>Latest News & Update</small></p>
                        </div>
                    </div>
                
                </div>
                <div className="col">
                    <div className='d-flex align-items-center text-start'>
                        <div className='join'>
                            <img className='img-fluid' src={three} width={'40px'} alt="" />
                        </div>
                        <div className='lh-1'>
                            <h3 className='fw-bolder'>Telegram</h3>
                            <p><small>Channel For Community </small></p>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default Join;