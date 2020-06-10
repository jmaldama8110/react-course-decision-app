import React from 'react';

const Option = (props) =>(
        <div className="option">
        <p className="option-text">{props.contador}. {props.optionText}</p>
            <button className="button button--link"
                    onClick= { ()=>{ props.handleBorrarOpcionProp(props.optionText) } }>
            Eliminar
            </button>
        </div>
    );

export default Option;