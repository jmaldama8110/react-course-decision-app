const mutiplicador = {
    //numeros
    numeros: [2,3,5],
    factor: 10,

    mutiplicar () {
        const resultado = this.numeros.map( (num)=> {
            return num * this.factor;             
        })
        return resultado
    }

};

console.log( mutiplicador.mutiplicar() );


