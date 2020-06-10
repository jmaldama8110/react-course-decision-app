import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class DecisionApp extends React.Component {
    /////////////////// propiedades ////////////////
    state = {
        options: [],
        selectedOption: undefined
    };
    ///////// inicializar por medio del archivo .babelrc - transform-class-properties
    ////////////////////////
    ///////////////////// FUNCIONES => que permiter manejarse por medio 
    ///// de transform-class-properties ////////////////////
    
    onBorrarOpciones = () => {
        this.setState( ()=> ( { options: [] } )  );
    }

    onBorrarOpcion = (opcion) => {

        this.setState( (prevState) => ({
            options: prevState.options.filter( (item) =>  item !== opcion  )
        }));
    }

    onAgregarOpcion = (opcion) => {
        if( !opcion ){
            return 'Ingresa un valor valido...';
        }else if( this.state.options.indexOf(opcion) > -1 ){
            return 'Ya existe el elemento en el arreglo...'
        }

        this.setState( (prevState) => ( {  options: prevState.options.concat(opcion)  } ) );
    }

    onElegirUna = () => {
        const rand = Math.floor( Math.random()* (this.state.options.length) );
        
        this.setState( ()=> ( { selectedOption: this.state.options[rand] }  ) )
        // alert( this.state.options[ rand ] );

    }

    onModalOK = () =>{
            this.setState( ()=> ({selectedOption: undefined } ) );
    }

    ///////////////// Metodos de LIFE CYCLE ////////////////
    componentDidMount(){

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);        

            if( options ){
                this.setState( () => ({ options }) );
            }
                   
        }
        catch (e){
            // Error al intentar parsear JSON
            // no hacer nada
        }
        

    }
    componentDidUpdate(prevProps, prevState){

        //Guarda la lista de manera local, unicamente si existen cambios en el arreglo
        if( prevState.options.length !== this.state.options.length ){
            const json = JSON.stringify( this.state.options);
            localStorage.setItem('options',json);

        }
    }
    componeneWillUnmount() {
        console.log('Component Will Unmount')
    }
    ////////////////////////////////////////////////////////
    ///////RENDER DECISION APP contiene todos los componentes//////////
    render() {
        const subtitulo = "deja que la computadora decida por ti!"

        return (
            <div>
                <Header subtitulo={subtitulo}/>
                <div className="container">
                    <Action     tieneOpciones={ this.state.options.length > 0 }
                                handleElegirUnaProp={this.onElegirUna}
                    />
                    <div className="widget">
                        <Options    opciones={ this.state.options } 
                                    handleBorrarOpcionesProp={this.onBorrarOpciones}
                                    handleBorrarOpcionProp={this.onBorrarOpcion}
                        />
                        <AddOption handleAgregarOpcionProp={this.onAgregarOpcion}/>
                    </div>
                
                </div>

                <OptionModal    selectedOptionProp={this.state.selectedOption}
                                onModalOKProp={this.onModalOK}
                />
            </div>

        );
    }///////////////////////////////////////////////////////////////

}