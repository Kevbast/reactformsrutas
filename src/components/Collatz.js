import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero =React.createRef();

    generarCollatz =(event)=>{
        event.preventDefault();
        let numero=parseInt(this.cajaNumero.current.value);//recogemos el valor del input number
        let aux=[]//declaramos una variable auxiliar

        while(numero!=1){
            if(numero%2==0){//si es par 
                numero = numero / 2;
            }else{
                numero=numero*3 +1;
            }
            aux.push(numero);
        }
        //Pasamos el aux cada vez que cambie    
        this.setState({
            numeros:aux
        })

    }

    state={
        numeros:[]//creamos una lista de numeros,puesto que va a cambiar
    }

  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
        <form onSubmit={this.generarCollatz}>
            <label>Número: </label>
            <input type="number" ref={this.cajaNumero}/>
            <button>Mostrar conjetura</button>
            <ul>
                {
                    this.state.numeros.map((num,index)=>{
                        return(<li key={index}>{num}</li>)
                    })
                }
            </ul>
        </form>
      </div>
    )
  }
}
