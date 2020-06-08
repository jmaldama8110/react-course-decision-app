import React from 'react';
import Option from './Option';


const Options = (props) => {

    return (
        <div>
        <button onClick={props.handleBorrarOpcionesProp }>Eliminar Todas</button>
        {props.opciones.length === 0 && <p>Ingresa una opcion...</p>}
        {
                props.opciones.map(  (op) =>   
                <Option key={op}
                        optionText={op}
                        handleBorrarOpcionProp={props.handleBorrarOpcionProp}                                
                                                     />)
            }
        </div>
    );

}


export default Options;