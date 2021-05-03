import React from 'react';
import api from '../api';
import './page-estilos/BadgeDetails.css';
import Badge from '../components/Badge';
import Skeleton from 'react-loading-skeleton';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount(){
        this.traerData()
    }

    traerData = async () =>{
        this.setState({ loading: true, error: null})

        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            
            this.setState({
                loading: false,
                data: data
            })
        } catch (error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    handleOpenModal = () =>{
        this.setState({
            modalIsOpen: true
        })
    }

    handleCloseModal = () =>{
        this.setState({
            modalIsOpen: false
        })
    }

    handleDeleteBadge = async () =>{
        this.setState({
            loading: true,
            error: null
        })

        try{
            await api.badges.remove(this.props.match.params.badgeId)

            this.setState({
                loading: false
            })

            this.props.history.push('/badges-api')

        } catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    render(){
        if (this.state.loading){
            return (
                <React.Fragment>
                    <div>    
                        <Skeleton height={200} />
                    </div>
                    <div className="container-badges">
                        <Badge firstName={<Skeleton width={100}/>} lastName={<Skeleton width={100}/>}  jobTitle={<Skeleton width={200}/>} twitter={<Skeleton width={200}/>} email={<Skeleton/>}/>
                        <div className="btn-skeleton"><Skeleton width={70} height={23}/></div>
                        <div><Skeleton width={70} height={23}/></div>
                    </div>
                </React.Fragment>
            )
        }

        if (this.state.error){
            return (
                <div>
                    <p>Error en el servidor : 500</p>
                </div>
            )
        }

        return (
            <BadgeDetails onDeleteBadge={this.handleDeleteBadge} onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} modalIsOpen={this.state.modalIsOpen} estado={this.state.data} />
        )
    }
}

export default BadgeDetailsContainer;