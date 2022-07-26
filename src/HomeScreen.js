import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner';
import './HomeScreen.css';
import Row from './Row';

function HomeScreen() {
    return (
        <div className="homeScreen">
           
            <Nav />
            <Banner />
            <Row />
        </div>
    )
}

export default HomeScreen
