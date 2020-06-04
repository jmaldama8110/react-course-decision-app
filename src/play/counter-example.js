
class Counter extends React.Component{    

    constructor(props){
        super(props);
        this.onSumarUno = this.onSumarUno.bind(this);
        this.onMenosUno = this.onMenosUno.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            count: 0
        };

    }

   onSumarUno(){
        this.setState( (prevState) =>  ({ count: prevState.count + 1 } ) );
   }

   onMenosUno () {
        this.setState( (prevState )=> ( { count: prevState.count - 1 } ) ) ;
   }

   onReset() {
    this.setState( () => ( {count:0} ) );
   }

   //// Funciones Life Cycle //////////
   componentDidMount() {

        const number = localStorage.getItem('contador');
        if( number ){
            const contador = JSON.parse(number);
            this.setState( ()=> ({ count: contador}) )
        }

   }

   componentDidUpdate() {
        const json = JSON.stringify(this.state.count);
        localStorage.setItem('contador',json);

   }
   //////////////////////////////////

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
