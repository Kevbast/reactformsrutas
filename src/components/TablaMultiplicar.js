import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
        cajaNumero =React.createRef();//CREAR REFERENCIA IMPORTANTE PAR TRABAJAR

        generarTabla=(event)=>{
            event.preventDefault();
        let numero=parseInt(this.cajaNumero.current.value);//recogemos el valor del input number
        let aux=[]//declaramos una variable auxiliar

            for (let i = 1; i <= 10; i++) {
                aux.push(numero*i)//funcionalidad tabla de multiplicar 
            }

            //Pasamos el aux cada vez que cambie    
            this.setState({
                tabla:aux
            })
        }
        
        state={
            tabla:[],
        }

  render() {
    return (
      <div>
        <h1>Tabla de multiplicar</h1>
        <form onSubmit={this.generarTabla}>
            <label>Número: </label>
            <input type="number" ref={this.cajaNumero}/>
            <button>Mostrar tabla</button>
            
        </form>
        <table border="1" style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th>OPERACIÓN</th>
                        <th>Resultado</th>
                    </tr>
                </thead>            
            <tbody>
                {
                    this.state.tabla.map((num,index)=>{
                        return(<tr key={index}>
                            <td>{this.cajaNumero.current.value}*{index+1}</td>
                            <td >{num}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
