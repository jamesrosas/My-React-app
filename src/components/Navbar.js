import React from 'react';
import './estilos/Navbar.css';
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


class Navbar extends React.Component {
    render() {
        return (
        <div className="nav-container">
            <Link to="/">
                <img src={logo || <Skeleton circle={true} height={50} width={50} />} alt="logo platziconf"/>
                <p>Platzi<strong>Conf</strong></p>
            </Link>
        </div>
        );       
    }
}

export default Navbar;