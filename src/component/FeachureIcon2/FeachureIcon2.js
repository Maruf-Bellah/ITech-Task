import React from 'react';
import '../Home/FeachureIcon1/FeachureIon.css';
import './FeachureIcon2.css';
import one from './Ellipse 15@2x.png';
import two from './Ellipse 16@2x.png';
import three from './Ellipse 17@2x.png';
import four from './Ellipse 18@2x.png';
import five from './Ellipse 19@2x.png';


const FeachureIcon2 = () => {
    return (
        <div className='container pt-4 text-center'>
            <button className='btn btn-light mb-4 color'>Notero-Easy Note App</button>
        <h1 className='awesone pb-3'>Awesome <span className='text-color'> Features </span></h1>
        <div class=" row py-5  row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-5 justify-content-md-center">
            <div  className="col cursor py-3">
                <img className='img' src={one} alt="" />
               <div  className='icon-tex'>
               <p>Notes Powerful</p>
                <p>and Security</p>
               </div>
            </div>
            <div className="col cursor  py-3">
                <img src={two} alt="" />
                <div  className='icon-tex'>
                    <p>Easy Sort, Classify</p>
                    <p>and Search</p>
                </div>
            </div>
            <div className="col cursor py-3">
                <div  id='new'>
                <img src={three} alt="" />
                <div className='icon-tex'>
                    <p>Collaboration and</p>
                    <p>Share</p>
                </div>
                <div className="new d-none d-lg-block d-xl-block">
                    New
                </div>
                </div>
            </div>
            <div className="col cursor py-3">
                <img src={four} alt="" />
                <div  className='icon-tex'>
                    <p>Quick Note In</p>
                    <p>Everywhere</p>
                </div>
            </div>
            <div className="col cursor py-3">
                <img src={five} alt="" />
                <div className='icon-tex'>
                    <p>Write and Draw</p>
                    <p>on Ipad</p>
                </div>
            </div>
          
        </div>
    </div>
    );
};

export default FeachureIcon2;