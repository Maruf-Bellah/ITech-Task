import React from 'react';
import './Feachure.css';
import FeachureIcon from '../Home/FeachureIcon1/FeachureIcon';
import FeachureIcon2 from '../FeachureIcon2/FeachureIcon2';



const Feachure = () => {
    return (
        <div id='big' className='container-fluid ' >
            <div className="">
                <div className="box" id="red">
                    <div id='feachureIcon' className=''>
                      <FeachureIcon></FeachureIcon>
                        <div className='breck'>
                            <hr />
                        </div>
                        <FeachureIcon2></FeachureIcon2>
                        <div id='ring' className='d-none d-lg-block d-xl-block'></div>
                        <div id='small-ring' className='d-none d-lg-block d-xl-block'></div>
                    </div>
                </div>
                <div className="d-none d-md-none d-lg-none d-xl-block" id="green">
                </div>
            </div>
        </div>
    );
};

export default Feachure;