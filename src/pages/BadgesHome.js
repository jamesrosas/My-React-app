import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../images/badge-header.svg';
import './page-estilos/BadgesHome.css';

function BadgesHome() {
    return (
    <div>
        <main className="home-container">
            <h1>Welcome to Platzi Badges!!</h1>
            <img className="home-img" src={homeLogo} alt="logo platzi badges"/>
            <Link to="/badges-api" className="btn-home">Start!</Link>
        </main>
    </div>
    )
}

export default BadgesHome;