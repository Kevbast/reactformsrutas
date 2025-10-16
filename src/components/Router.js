import React, { Component } from 'react'
//para la navegación
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeComponent from './HomeComponents'
import Cine from './Cine'
import Musica from './Musica'
import FormSimple from './FormSimple'
import Collatz from './Collatz'
import TablaMultiplicar from './TablaMultiplicar'
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
            <Route path='/collatz' element={<Collatz/>}/>
            <Route path='/TablaMultiplicar' element={<TablaMultiplicar/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
