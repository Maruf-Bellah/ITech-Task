import React from 'react';
import './Navbar.css';
import logo from './logo@2x.svg';
import man from './Vector@2x.svg';

const Navbar = () => {
    return (
        <div id='navbar-border'>
            <nav id='navbar-border1' className="navbar navbar-expand-lg bg-white ">
                <div className="container pt-2  fw-medium">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="" height="50" className="d-inline-block align-text-top" />

                    </a>

                    <div className="target d-none d-lg-block d-xl-block">

                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <small id='hot' className='	d-none d-xl-block d-xxl-none'>hot</small>

                    <div className="collapse navbar-collapse text-center" id="navbarScroll">
                    
                        <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll"  >
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                    {/* <span className='fs-3'> &#780;</span> */}
                                </a>
                                <ul className="dropdown-menu active">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item " href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown active">
                        
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Page
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item " href="#">Action</a></li>
                                    <li><a className="dropdown-item " href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item " href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="cursor nav-link active">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="cursor nav-link active">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="cursor nav-link active">Contact</a>
                            </li>


                        </ul>
                        <form className="d-flex icon justify-content-center  gap-3 align-items-center" role="search">

                            <a href="">
                            <img className='border p-2 rounded-circle' src={man} width={'35px'} height={'35px'} alt="" /></a>
                            <button className="btn border  rounded-pill btn-outline-dark" type="submit">Join IRech Hub &rarr; </button>





                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;