import React from 'react';
import one from './TECHNEWS.png';
import two from './hello world@2x.png';
import three from './IT Blog@2x.png';
import four from './digitek@2x.png';
import five from './teckrown@2x.png';
import './FeachureIon.css';






const FeachureIcon = () => {
    return (
        <div className='container text-center'>
            <h1 className='text'><span id='feachure'> 25K+ Installation </span> and featured on</h1>
            <div class=" row py-5  row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 justify-content-md-center">
                <div  className="col cursor py-3">
                    <img className='img' src={one} alt="" />
                </div>
                <div className="col cursor py-3">
                    <img src={two} alt="" />
                </div>
                <div className="col cursor  py-3">
                    <img src={three} alt="" />
                </div>
                <div className="col cursor  py-3">
                    <img src={four} alt="" />
                </div>
                <div className="col cursor py-3">
                    <img src={five} alt="" />
                </div>
              
            </div>
        </div>
    );
};

export default FeachureIcon;