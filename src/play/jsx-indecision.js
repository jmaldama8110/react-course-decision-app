console.log('App.js is running...');

// JSX JavaScript XML
const app = {
    title: "Titulo aqui",
    subtitle: "Subitulo",
    options: []
}

const enviarFormulario = (e) => {
    e.preventDefault();
    
    const valor = e.target.elements.opcion.value;

    if( valor ){
        app.options.push(valor);
        e.target.elements.opcion.value = '';
        renderApp()
    }

}

const limpiarFormulario = (e) => {
    app.options = [];
    renderApp();
}

const tomarDecision = () => {
    /* generar un numero aleatorio */
    const rand = Math.floor( Math.random()* (app.options.length) );

    const opcion = app.options[rand]
    console.log(opcion)
}


const appRoot = document.getElementById('app');

const renderApp = () =>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            { (app.options && app.options.length > 0) ? <p>Here are your choises </p>: <p>No choises</p> }

            <ol>
            {
                app.options.map(    (op) => <li key={op}>{op}</li>     )
            }
            </ol>
            <form onSubmit={enviarFormulario}>
                <input type="text" name="opcion"></input>
                <button>Agregar opcion</button><p></p>
                <button disabled={ app.options.length === 0 } onClick={tomarDecision}>Debo hacer!</button>
                <button onClick={limpiarFormulario}>Reset</button>
            </form>

        </div>  );


ReactDOM.render(template,appRoot);
    
}

renderApp()