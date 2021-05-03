import React from 'react';
import Modal from './Modal';
import './estilos/ModalDelete.css'

function ModalDelete(props){
    return <Modal onClose={props.onClose} isOpen={props.isOpen}>
        <div className="modal-delete_container">
            <h2 className="modal-title">Estas seguro?</h2><br/>
            <p className="modal-paragraph">Se eliminara el badge</p>
            <div>
                <button className="btn eliminar" onClick={props.onDeleteBadge}>
                    Delete
                </button>
                <button className="btn cancel" onClick={props.onClose}>
                    Cancel
                </button>
            </div>
        </div>
    </Modal>
}

export default ModalDelete;