import React from 'react';
import './Note.css';
import note from './ipad 1@2x.png';
import one from './Vector@x.svg';
import two from './Vector.svg';
import three from './Vector@2x.svg';

const Note = () => {
    return (
        <div className='container-fluid py-5'>
            <div class="row">
                <div id='note' className="bubble note col-md-7">
                    <div >
                        <img className='img-fluid p-sm-5 ' src={note} alt="" />
                        
                    </div>
                    <div className='d-none d-lg-block d-xl-block' id='notes'></div>
                </div>
                <div class="col-md-5 p-4">
                    <button className='notero-button btn  mb-3'>Notero-Easy Note App</button>
                    <h1 className='fw-bolder'>The Noter For <br />
                       <span className='text-color'> Creative </span></h1>
                    <p>Stay focused and productive with a clean clutter-free note space. the flexible ways to organize your notes: hashtags , nested notebooks , pining notes to the top of the note list, ect.</p>

                    <div className='d-flex align-items-center py-3'>
                        <div>
                            <img className='match pb-3 me-3' src={one} height={'40px'} width={'40px'} alt="" />
                        </div>
                        <div>
                            <h6>Filtering notes using matched keywords</h6>
                        </div>
                    </div>
                    <div className='d-flex align-items-center py-3'>
                        <div>
                            <img className='day pb-3 me-3' src={two} width={'30px'} alt="" />
                        </div>
                        <div>
                            <h6> Automatically sync in real time</h6>
                        </div>
                    </div>
                    <div className='d-flex align-items-center py-3'>
                        <div>
                            <img className='rich pb-3 me-3' src={three} height={'40px'} width={'40px'} alt="" />
                        </div>
                        <div>
                            <h6>Complete note editor with rich text options</h6>
                        </div>
                    </div>
                    <button className='comon btn rounded-pill'>Free Register </button>
                </div>
            </div>
        </div>
    );
};

export default Note;