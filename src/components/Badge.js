import React from 'react';
// import '../global.css';
import './estilos/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
    render() {
        return <div className="badge-container">
            <header className="header">
                <img src={confLogo} alt='logo de platziconf' />
            </header>
            <article className="avatar-info">
                <div className="avatar-container">
                    <Gravatar className="image" email={this.props.email} />
                    <h2 className="name">{this.props.firstName || 'FIRST_NAME'}<br />{this.props.lastName || 'LAST-NAME'}</h2>
                </div>
                <p>{this.props.jobTitle || 'JOB_TITLE'}</p>
                <p><span className="twitter-logo"></span>@{this.props.twitter || 'twitter'}</p>
            </article>
            <footer className="footer">
                <p>#Platzi</p>
            </footer>
        </div>;        
    }
}

export default Badge;