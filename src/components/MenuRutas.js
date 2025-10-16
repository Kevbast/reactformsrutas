import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/musica'>Musica</a></li>
            <li><a href='/cine'>Cine</a></li>                
            <li><a href='/formsimple'>Formulario</a></li>                
            <li><a href='/collatz'>Collatz</a></li>                
            <li><a href='/TablaMultiplicar'>Tabla de multiplicar</a></li>                
            <li><a href='/TablaMultiplicarv2'>Tabla de multiplicarv2</a></li>                
            <li><a href='/SeleccionMultiple'>Seleccion Múltiple</a></li>                
        </ul>
      </div>
    )
  }
}
