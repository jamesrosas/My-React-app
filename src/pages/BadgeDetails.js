import React from 'react';
import './page-estilos/BadgeDetails.css';
import confiLogo from '../images/badge-header.svg';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import ModalDelete from '../components/ModalDelete';

function BadgeDetails(props) {
    
        const estado = props.estado;
        return (
            <React.Fragment>
                <div className="hero-container">    
                    <img className="hero-img" src={confiLogo} alt="logo de paltziconf"/>
                    <h2 className="name-title">{ estado.firstName || 'FIRST_NAME'} { estado.lastName ||'LAST_NAME'}</h2>
                </div>
                <div className="main-badges">
                    <div className="container-badges">
                        <Badge firstName={estado.firstName || 'FIRST_NAME'} lastName={ estado.lastName || 'LAST_NAME' } email={estado.email || 'EMAIL'} jobTitle={estado.jobTitle || 'JOB_TITLE'} twitter={estado.twitter || 'twitter'}/>
                    </div>
                    <div className="container-buttons">
                        <Link to={`/badge/${estado.id}/edit`} className="btn-edit">
                            Editar
                        </Link>
                        <button onClick={props.onOpenModal} className="btn-delete">
                            Eliminar
                        </button>
                        <ModalDelete onDeleteBadge={props.onDeleteBadge} onClose={props.onCloseModal} isOpen={props.modalIsOpen}/>
                    </div>
                </div>

            </React.Fragment>
        )
}

export default BadgeDetails;