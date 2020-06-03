// ESTADOS DEL COMPONENTE REACT

// 1. set default value
// 2. Render de default value
// 3. Change de estatus based on any event
// 4. 



class Counter extends React.Component{    

    constructor(props){
        super(props);
        this.onSumarUno = this.onSumarUno.bind(this);
        this.onMenosUno = this.onMenosUno.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            count: 0,
            name: 'JM'
        };

    }

   onSumarUno(){
        this.setState( (prevState) => {
            
            return {
                count: prevState.count + 1
            };
        });
   }

   onMenosUno () {
        this.setState( (prevState )=>{

            return {
                count: prevState.count - 1
            }

        });


   }

   onReset() {

    this.setState( ()=>{
            return {
                count: 0

            };

    });

   }

    render() {

        return (
            <div>
                <h1>Conteo -> {this.state.count}</h1>

                <button onClick={this.onSumarUno}>+1</button>
                <button onClick={this.onMenosUno}>-1</button>
                <button onClick={this.onReset}>reset</button>
            </div>

        );

    }

 
}
ReactDOM.render(<Counter />,document.getElementById('app'))

// let conteo = 0;

// const sumarUno = () => {
//     conteo++;
//     console.log('sumaUno',conteo);
//     renderCounterApp();
// }
// const menosUno = () => {

//     conteo--;
//     console.log('menosUno');
//     renderCounterApp()
// }

// const resetToCero = () => {
//     conteo = 0;
//     console.log('reset');
//     renderCounterApp()
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Cuenta: {conteo}</h1>
//             <button onClick={sumarUno}>+1</button>
//             <button onClick={menosUno}>-1</button>
//             <button onClick={resetToCero}>=0</button>
//         </div>
    
    
//     );
    
//     ReactDOM.render(templateTwo,appRoot);
    
    
// }
// renderCounterApp()