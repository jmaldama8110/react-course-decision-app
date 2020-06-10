import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOptionProp}
            onRequestClose={props.onModalOKProp}
            contentLabel="Opcion seleccionada"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__titulo">Opcion seleccionada</h3>
            {props.selectedOptionProp && <p className="modal__body">{props.selectedOptionProp}</p>}
            <button className="button" onClick={props.onModalOKProp}>OK</button>
        </Modal>
);

export default OptionModal ;

