import React, { Component } from 'react'

export default class FormSimple extends Component {
    //NECESITAMOS CREAR UNA VARIABLE DE REFERENIA PARA CADA OBJETO DEL FORMULARIO
    cajaNombre = React.createRef();

    peticionFormulario=(event)=>{
        //detenemos el submit del formulario
        event.preventDefault();
        console.log("Petición lista!");
        //PARA RECUPERAR EL VALOR DE UN OBJETO REACT:
        let nombre= this.cajaNombre.current.value;
        console.log("Nombre recibido "+ nombre)
    }
  render() {
    return (
      <div>
        <h1>FORMULARIO SIMPLE REACT</h1>
        <form onSubmit={this.peticionFormulario}>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombre}/>
            <button>Realizar petición</button>
        </form>
      </div>
    )
  }
}
