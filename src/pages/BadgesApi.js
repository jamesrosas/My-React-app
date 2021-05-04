import React, { useEffect, useState } from 'react';
import './page-estilos/Badges.css';
import Badge from '../components/Badge';
import confLogo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';


function BadgesApi (props){
        const badgesUsers = props.badges;

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
                    <div className="search-container">
                        <label>Buscar Badge</label>
                        <input type="text" className="search-input"></input>
                    </div>
                    <ul>
                        {badgesUsers.reverse().map((badge)=> {
                            return (
                            <li key={badge.id}>
                                <Link to={`/badge/${badge.id}`} className="link-style">
                                    <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter} avatar={badge.avatarUrl}/>
                                </Link>
                            </li>
                            )
                        })} 
                    </ul>
                    {badgesUsers.length === 0 && (
                        <div>
                            <h3 className="no-badges">No encontramos ningun Badge , crea uno nuevo dando click en New Badge</h3>
                        </div>
                    )}
                   
                </div>

            </div>
        </div>
        );
}
        
export default BadgesApi;