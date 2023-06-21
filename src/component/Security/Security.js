import React from 'react';
import './Security.css';
import security from './2mobiles 1@2x.png';
import crome from './Chrome@2x.png';

const Security = () => {
    return (
        <div className='container-fluid pb-5'>
            <div class="row">

                <div class="col-md-5 p-sm-5">
                    <button className='notero-button btn'>Better Note Management</button>

                    <h1 className='fw-bolder py-2'>Your Notes <span className='text-color'>Security </span></h1>
                    <p>Automatically syncs across all your devices. You can also access and write notes without internet connection.</p>

                    <div class="accordion collaps rounded" id="accordionExample">
                        <div class="collaps accordion rounded">
                            <h2 class="accordion-header ">
                                <button class="accordion-button fw-bolder collaps" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Create And Save Your Notes With Multi-Media
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse rounded collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body rounded ">
                                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                                </div>
                            </div>
                        </div>
                        <div class="accordion ">
                            <h2 class="accordion-header"> 
                                <button class="accordion-button fw-bolder collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Web Clipper Extension 
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body rounded">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion">
                            <h2 class="accordion-header">
                                <button class="accordion-button fw-bolder collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Protect Your Note With Lock
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body rounded">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>



                    <button className='crome-boton-color btn rounded-pill px-3 mt-5'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={crome} width={'54px'} alt="" />
                            </div> <span className='dag'>|</span>

                            <div className='crome text-start'>
                                <small>Available In The</small><br />
                                <b>Chrome Web Store</b>
                            </div>
                        </div>
                    </button>
                </div>



                <div  className="bubble note col-md-7">
                    <div id='security'>
                        <img className='img-fluid p-sm-5 ' src={security} alt="" />
                        <div className='d-none d-lg-block d-xl-block' id="security1"></div>
                    </div>
             
                </div>

            </div>
            <div>
            </div>
        </div>
    );
};

export default Security;