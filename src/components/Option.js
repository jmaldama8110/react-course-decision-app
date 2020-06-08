import React from 'react';

const Option = (props) =>{
    return (
        <div>
            {props.optionText}
            <button onClick= { ()=>{ props.handleBorrarOpcionProp(props.optionText) } }>
            Eliminar
            </button>
        </div>
    );

}

export default Option;