import React, { Component } from 'react'
//para la navegación
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeComponent from './HomeComponents'
import Cine from './Cine'
import Musica from './Musica'
import FormSimple from './FormSimple'
//snippet rcc + tab 
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/cine' element={<Cine/>}/>
            <Route path='/musica' element={<Musica/>}/>
            <Route path='/musica' element={<Musica/>}/>
            <Route path='/formsimple' element={<FormSimple/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
