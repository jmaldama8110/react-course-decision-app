
class DecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.onBorrarOpciones = this.onBorrarOpciones.bind(this);
        this.onElegirUna = this.onElegirUna.bind(this);
        this.onAgregarOpcion = this.onAgregarOpcion.bind(this);
        this.state = {
            options: []

        };
    }

    onBorrarOpciones () {
        this.setState( ()=>{
            return {
                options: []
            };

        });


    }

    onAgregarOpcion(opcion){

        if( !opcion ){
            return 'Ingresa un valor valido...';
        }else if( this.state.options.indexOf(opcion) > -1 ){
            return 'Ya existe el elemento en el arreglo...'
        }

        this.setState( (prevState) =>{  
            return {
                options: prevState.options.concat(opcion)
            };
        })


    }

    onElegirUna() {
        const rand = Math.floor( Math.random()* (this.state.options.length) );
        alert( this.state.options[ rand ] );

    }

    render() {
        const titulo = "Decisiones!";
        const subtitulo = "Deja que elija!"

        return (
            <div>
                <Header titulo={ titulo } subtitulo={ subtitulo }/>
                <Action     tieneOpciones={ this.state.options.length > 0 }
                            handleElegirUnaProp={this.onElegirUna}
                />
                <Options    opciones={ this.state.options } 
                            handleBorrarOpcionesProp={this.onBorrarOpciones}
                />
                <AddOption handleAgregarOpcionProp={this.onAgregarOpcion}/>
            </div>

        );
    }
}

const Header = (props) =>{

    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    );

}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleElegirUnaProp} disabled={!props.tieneOpciones}>
                ¿Que hacer?
            </button>
        </div>  
        );

    
}


class Options extends React.Component {

    render() {
        return (
            <div>
            <button onClick={ this.props.handleBorrarOpcionesProp }>Eliminar Todas</button>
            {
                    this.props.opciones.map(  (op) => <Option key={op} optionText={op} />)
                }
            </div>
        );
    }

}

const Option = (props) =>{
    return (
        <div>{props.optionText}</div>
    );

}



class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.onSubmitAddOption = this.onSubmitAddOption.bind(this);
        // aqui se define el estatus del componenten ( al igual que el state del DecisionApp (padre))
        this.state = {
            error: undefined
        };
    }
    
    onSubmitAddOption (e) {
        
        e.preventDefault();
        
        const valor = e.target.elements.descripcion.value.trim();
        const error = this.props.handleAgregarOpcionProp(valor);
        e.target.elements.descripcion.value = '';
        this.setState( ()=>{
            return { error };
        })

    }

    render() {

        return (

            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitAddOption} >
                    <input type="text" name="descripcion" placeholder="Ingresa algo aqui"></input>
                    <button>Enviar</button>
                </form>
            </div>

        );

    }

}


ReactDOM.render( <DecisionApp />, document.getElementById('app') )