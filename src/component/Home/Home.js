import React from 'react';
import Feachure from '../Feachure/Feachure';
import Header2 from '../Header2/Header2';
import './Home.css';
import Note from '../Note/Note';
import Security from '../Security/Security';
import Focus from '../Focus/Focus';
import Populer from '../Populer/Populer';
import Populer1 from '../Populer/Populer1';
import Customer from '../Customer/Customer';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div className='w-1200px mx-auto'>
            <Header2></Header2>
            <Feachure></Feachure>
            <Note></Note>
            <Security></Security>
            <Focus></Focus>
            <Populer></Populer>
            <Populer1></Populer1>
            <Customer></Customer>
            <Join></Join>
            <Footer></Footer>
        </div>
    );
};

export default Home;