import React from 'react';
import Navbar from '../components/Navbar';
import './page-estilos/Badges.css';
import Badge from '../components/Badge';
import confLogo from '../images/badge-header.svg';
import dataJson from '../data.json';
import { Link } from 'react-router-dom';

class BadgesCopia extends React.Component {
    state = {
        data: [dataJson.datos]  
    }
    // datos = Object.values(this.state.data.data)[0];
    render(){
        return(
        <div className="badges-copia_container">
            <div className="hero">
                <img className="image-hero" src={confLogo} alt="hero paltzi Conf" />
            </div>
            <div className="badges-container">
                <div className="btn-container">
                    <Link className="btn-badge" to="/badge-page" >New Badge</Link>
                </div>
                <div className="badges-list">
                    <ul>
                        {this.state.data[0].map((badge)=> {
                            return (
                            <li key={badge.id}>
                                <Badge firstName={badge.firstName} lastName={badge.lastName} jobTitle={badge.jobTitle} twitter={badge.twitter} avatar={badge.avatarUrl}/>
                            </li>
                            )
                        })} 
                    </ul>

                </div>

            </div>
        </div>
        );
    }
}
        
export default BadgesCopia;