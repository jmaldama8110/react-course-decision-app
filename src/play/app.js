
class DecisionApp extends React.Component {

    /// CONSTRUCTOR
    constructor(props){
        super(props);
        this.onBorrarOpciones = this.onBorrarOpciones.bind(this);
        this.onElegirUna = this.onElegirUna.bind(this);
        this.onAgregarOpcion = this.onAgregarOpcion.bind(this);
        this.onBorrarOpcion = this.onBorrarOpcion.bind(this);

        this.state = { options: [] };
    }
    ///////////////////// FUNCIONES
    onBorrarOpciones () {
        this.setState( ()=> ( { options: [] } )  );
    }
    onBorrarOpcion (opcion) {

        this.setState( (prevState) => ({
            options: prevState.options.filter( (item) =>  item !== opcion  )
        }));
    }
    onAgregarOpcion(opcion){

        if( !opcion ){
            return 'Ingresa un valor valido...';
        }else if( this.state.options.indexOf(opcion) > -1 ){
            return 'Ya existe el elemento en el arreglo...'
        }

        this.setState( (prevState) => ( {  options: prevState.options.concat(opcion)  } ) );
    }

    onElegirUna() {
        const rand = Math.floor( Math.random()* (this.state.options.length) );
        alert( this.state.options[ rand ] );

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

    
    ////////////////////////////////////////////////////////////////////////////////
    ///////RENDER DECISION APP contiene todos los componentes//////////
    render() {
        const subtitulo = "deja que la computadora decida por ti!"

        return (
            <div>
                <Header subtitulo={subtitulo}/>
                <Action     tieneOpciones={ this.state.options.length > 0 }
                            handleElegirUnaProp={this.onElegirUna}
                />
                <Options    opciones={ this.state.options } 
                            handleBorrarOpcionesProp={this.onBorrarOpciones}
                            handleBorrarOpcionProp={this.onBorrarOpcion}
                />
                <AddOption handleAgregarOpcionProp={this.onAgregarOpcion}/>
            </div>

        );
    }///////////////////////////////////////////////////////////////

}

const Header = (props) =>{
    return (
        <div>
            <h1>Titulo: {props.titulo}</h1>
            {props.subtitulo && <h2>{props.subtitulo}</h2> } 
        </div>
    );
}
 Header.defaultProps = {
    titulo: 'Decisiones!'
 };

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleElegirUnaProp} disabled={!props.tieneOpciones}>
                ¿Que hacer?
            </button>
        </div>  
        );
}


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
        
        this.setState( ()=> ( { error } ) );


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


ReactDOM.render( <DecisionApp  />, document.getElementById('app') )