import React from 'react';
import Navbar from '../components/Navbar';
import './page-estilos/Badges.css';
import Badge from '../components/Badge';
import confLogo from '../images/badge-header.svg';
import dataJson from '../data.json';
import { Link } from 'react-router-dom';

class BadgesRickMorty extends React.Component {
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: []
        }
    }
    componentDidMount(){
        this.getApiData()
    }

    getApiData = async () => {
        this.setState({ loader: true, error: null})
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
            const data = await response.json();
    
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results,
                        data.results
                    )
                },
                nextPage: this.state.nextPage + 1
            })
        }
        catch (error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    // datos = Object.values(this.state.data.data)[0];
    render(){
        if (this.state.error){
            return `Error: ${this.state.error.message}`;
        }
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
                        {this.state.data.results.map((badge)=> {
                            return (
                            <li key={badge.id}>
                                <Badge firstName={badge.name}  jobTitle={badge.species} twitter={badge.origin.name} avatar={badge.image}/>
                            </li>
                            )
                        })} 
                    </ul>
                    <div className="btn-ver_mas__container">
                        {!this.state.loading && (
                            <button className="btn-ver_mas" onClick={() => this.getApiData()}>
                                Ver mas
                            </button>
                        )} 
                        
                    </div>
                </div>

            </div>
        </div>
        );
    }
}
        
export default BadgesRickMorty;