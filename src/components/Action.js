import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleElegirUnaProp} disabled={!props.tieneOpciones}>
                ¿Que hacer?
            </button>
        </div>  
        );
}

export default Action;