import React from 'react';
import Option from './Option';


const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header-titulo">Tus opciones</h3>
                <button 
                    className="button button--link"
                    onClick={props.handleBorrarOpcionesProp }
                >Eliminar Todas
                </button>
       
            </div>
                {props.opciones.length === 0 && <p className="widget-message">Ingresa una opcion...</p>}
                {
                        props.opciones.map(  (op,conteo) => (   
                        <Option key={op}
                                optionText={op}
                                contador={conteo + 1}
                                handleBorrarOpcionProp={props.handleBorrarOpcionProp}                                
                        />
                        ))
                    }
        </div>
    );

export default Options;