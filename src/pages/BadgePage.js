import React from 'react';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import './page-estilos/BadgePage.css'
import logoHero from '../images/badge-header.svg'
import api from '../api'
import Skeleton from 'react-loading-skeleton';

class BadgePage extends React.Component {
    state = {
         loading: false,
         error: null,
         form: {
                firstName: '',
                lastName: '',
                email: '',
                jobTitle: '',
                twitter: ''
            } 
    };
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
            await api.badges.create(this.state.form)
            this.setState({
                loading: false
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
                <React.Fragment>
                    <div><Skeleton height={250}/></div>
                    <br/>
                    <Badge firstName={<Skeleton width={200}/>} lastName={<Skeleton width={200}/>} email={<Skeleton/>} jobTitle={<Skeleton width={200}/>} twitter={<Skeleton width={200}/>} />
                </React.Fragment>
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
                    <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} title={`Inscribete ahora!`}/>
                </div>
            </div>
        </div>
        );       
    }
}

export default BadgePage;