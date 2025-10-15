import { Component } from "react"

//con hacer rce se crea la clase
class HomeComponent extends Component{

    render(){

        return(<div>
            <h1 style={{color:"blue"}}>Estoy en home</h1>
            <img style={{width:"100px",height:"100px"}} src="https://tse2.mm.bing.net/th/id/OIP.TfIwW6pZGdFgt04Jwx0yFQHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"/>
        </div>)
    }
}
export default HomeComponent