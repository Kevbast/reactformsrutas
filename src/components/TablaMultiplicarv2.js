import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
        selectNum =React.createRef();//CREAR REFERENCIA IMPORTANTE PAR TRABAJAR

        generarTabla=(event)=>{
            event.preventDefault();
        let numero=parseInt(this.selectNum.current.value);//recogemos el valor del input number
        let aux=[]//declaramos una variable auxiliar

            for (let i = 1; i <= 10; i++) {
                aux.push(numero*i)//funcionalidad tabla de multiplicar 
            }

            //Pasamos el aux cada vez que cambie    
            this.setState({
                tabla:aux
            })
        }
        
        generarRandoms=()=>{
            //podemos declarar el array vacio al llamar para que no se generen
            for (let i = 0; i <=5; i++) {
                var random = parseInt(Math.random()*50)+1
                this.select.push(random) 
            }

        }

        state={  
            tabla:[]
        }
        //LO QUITAMOS DEL STATE,PUESTO QUE NO LO CARGAMOS MÁS Q SOLO UNA VEZ PARA CARGAR LA LISTA
        select=[2,4,6,21,18,27]

  render() {
    return (
      <div>
        <h1>Tabla de multiplicar V2 CON SELECT</h1>
        {this.generarRandoms()}
        <form onSubmit={this.generarTabla}>
            <label>SELECCIONA EL NÚMERO: </label>
                        {/* <input type="number" ref={this.cajaNumero}/> */}
                        {/* RECORREMOS EL SELECT Y PONEMOS LOS NUMEROS,PONEMOS REF A SELECT PARA SABER QUE TENEMOS CREADA UNA REFERENCIA CON EL*/}
                        <select ref={this.selectNum}>
                            {
                                this.select.map((valor, index) =>{
                                    return(<option key={index} value={valor}>{valor}</option>)
                                })
                            }
                        </select>
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
                            <td>{this.selectNum.current.value}*{index+1}</td>
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
