import React from 'react';
import './page-estilos/Badges.css';
import Badge from '../components/Badge';
import confLogo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';
import api from '../api'
import errorImage from '../images/404Error-bro.svg'
import Skeleton from 'react-loading-skeleton';



class BadgesApi extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }
    componentDidMount(){
        this.getApiData()
    }

    getApiData = async () => {
        this.setState({ loading: true, error: null})
        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data
            })
        }
        catch (error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }
    
    render(){
        if (this.state.loading === true){
            return (
                <React.Fragment>
                    <div><Skeleton height={250}/></div>
                    <br/>
                    <Badge firstName={<Skeleton width={200}/>} lastName={<Skeleton width={200}/>} email={<Skeleton/>} jobTitle={<Skeleton width={200}/>} twitter={<Skeleton width={200}/>} />
                </React.Fragment>
            )     
        }
          
        if (this.state.error){
            return (
            <div>
                <div className="img-error_container">
                    <img src={errorImage} alt="Error 500" />
                    <Link className="btn-home" to="/">Regresar a la pagina principal</Link>  
                </div>
            </div>
            )
        }
        // if (this.state.data.length == 0){
        //     return (
        //         <div>
        //             <h3>No se encontro una mierda</h3>
        //         </div>
        //     )
        // }
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
                        {this.state.data.reverse().map((badge)=> {
                            return (
                            <li key={badge.id}>
                                <Link to={`/badge/${badge.id}`} className="link-style">
                                    <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter} avatar={badge.avatarUrl}/>
                                </Link>
                            </li>
                            )
                        })} 
                    </ul>
                    {this.state.data.length === 0 && (
                        <div>
                            <h3 className="no-badges">No encontramos ningun Badge , crea uno nuevo dando click en New Badge</h3>
                        </div>
                    )}
                   
                </div>

            </div>
        </div>
        );
    }
}
        
export default BadgesApi;