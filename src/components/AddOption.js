import React from 'react';

export default class AddOption extends React.Component {


    state = {
        error: undefined
    };

    onSubmitAddOption = (e) => {
        e.preventDefault();
        
        const valor = e.target.elements.descripcion.value.trim();
        const error = this.props.handleAgregarOpcionProp(valor);
        e.target.elements.descripcion.value = '';
        
        this.setState( ()=> ( { error } ) );
    }

    render() {
        return (

            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option-form" onSubmit={this.onSubmitAddOption} >
                    <input className="add-option-input" type="text" name="descripcion" placeholder="Ingresa algo aqui"></input>
                    <button className="button">Enviar</button>
                </form>
            </div>

        );

    }

}
