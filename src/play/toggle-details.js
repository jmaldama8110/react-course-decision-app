
class ToggleView extends React.Component{

    constructor(props){
        super(props);

        this.onVerOcultar = this.onVerOcultar.bind(this);
        this.state = {
            view: true
        }

    }

    onVerOcultar (){

        this.setState( (prevState)=>{
            return {
                view: !prevState.view
            }
        })
        
    }

    render() {
    
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.onVerOcultar}>
                    { this.state.view ? "Hide": "View" }
                </button>
                <div>
                    <p>
                    {this.state.view ? "Detalle visto aqui" : ""}
                    </p>
                </div>

            </div>

        );
    }

}

ReactDOM.render(<ToggleView />,document.getElementById('app'))

// const etiqueta = {
//     text: "Mostrar este detalle",
//     estado: true
// }


// const onShowDetails = (e) => {
//     etiqueta.estado = !etiqueta.estado;
//     renderApp()

// }


// const appRoot = document.getElementById('app');

// const renderApp = () =>{

//     const template = (
//         <div>
//             <h1>Toggle show details</h1>

//             <button onClick={onShowDetails}>{etiqueta.estado ? 'Hide' : 'Show' }</button>
//             <div>
//                 { etiqueta.estado ? <p>{etiqueta.text}</p>: <p></p> }
//             </div>

//         </div>  );


// ReactDOM.render(template,appRoot);
    
// }

// renderApp()

