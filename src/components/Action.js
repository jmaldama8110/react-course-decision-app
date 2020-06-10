import React from 'react';

const Action = (props) => (
        <div>
            <button className="big_button" onClick={props.handleElegirUnaProp} disabled={!props.tieneOpciones}>
                ¿Que hacer?
            </button>
        </div>  
        );

export default Action;