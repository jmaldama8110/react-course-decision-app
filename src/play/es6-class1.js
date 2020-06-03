
class Persona {

    constructor(nombre = 'Anonimo', edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getSaludos(){
        return `Hola soy ${this.nombre}!`;
    }

    getDescripcion(){
        return `${this.nombre} tiene ${this.edad} de edad!`;
    }

}

class Viajero extends Persona{
    constructor(nombre, edad, oriundo){
        
        super(nombre, edad );
        this.oriundo = oriundo;

    }

    esOriundo(){
        return !!(this.oriundo);
    }

    getSaludos(){
        let saludo = super.getSaludos();

        if( this.esOriundo() ){
            saludo += `, vengo de ${this.oriundo}`;
        }
        return saludo;


    }
}

// Traveler -> Person
// Add support for homeLocation()
// Override getGreeting

    const jm = new Viajero('Josiman',40,"Tabasco");
    console.log(jm.getSaludos())

    const tu = new Viajero("Erik",28);
    console.log( tu.getSaludos() )
