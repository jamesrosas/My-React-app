import React from 'react';
import './page-estilos/Badges.css';
import Badge from '../components/Badge';
import confLogo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';
import api from '../api'
import errorImage from '../images/404Error-bro.svg'
import Skeleton from 'react-loading-skeleton';
import BadgesApi from './BadgesApi';



class BadgesApiClass extends React.Component {
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
            <BadgesApi badges={this.state.data}/>
        )
    }
}
        
export default BadgesApiClass;