import React from 'react';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import './page-estilos/BadgePage.css'
import logoHero from '../images/badge-header.svg'
import api from '../api'
import Skeleton from 'react-loading-skeleton';

class BadgeEdit extends React.Component {
    state = {
         loading: true,
         error: null,
         form: {
                firstName: '',
                lastName: '',
                email: '',
                jobTitle: '',
                twitter: ''
            } 
    };

    componentDidMount(){
        this.traerData()
    }

    traerData = async () => {
        this.setState({loading: true , error: null})
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({
                loading: false,
                form: data
            })
        } catch(error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    handleChange = event => {
        this.setState({
            form:{
                ... this.state.form,
                 [event.target.name]: event.target.value
            }
        })
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        this.setState({
            loading: true,
            error: null
        });
        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({
                loading: false,
            });

            this.props.history.push('/badges-api')
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }
    render() {
        if (this.state.loading === true){
            return (
            <div className="badge-page_container">
                <div>
                    <Skeleton height={250}/>
                </div>
                <div className="badgepage-main">
                    <div className="badge-parent">
                        <Badge firstName={<Skeleton width={200}/>} lastName={<Skeleton width={100}/>} email={<Skeleton/>} jobTitle={<Skeleton width={200}/>} twitter={<Skeleton width={200}/>} />
                    </div>
                    <div className="badgeform-parent">
                        <BadgeForm formValues={<Skeleton/>} />
                    </div>
                </div>
            </div>
            )
        }
        return (
        <div className="badge-page_container">
            <div className="hero">
                <img className="image-hero" src={logoHero} alt="logo platziconf" />
            </div>
            <div className="badgepage-main">
                <div className="badge-parent">
                    <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} email={this.state.form.email} jobTitle={this.state.form.jobTitle} twitter={this.state.form.twitter} />
                </div>
                <div className="badgeform-parent">
                    <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} title={`Edita tus datos!`}/>
                </div>
            </div>
        </div>
        );       
    }
}

export default BadgeEdit;