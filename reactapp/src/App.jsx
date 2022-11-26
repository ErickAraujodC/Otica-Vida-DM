import React from "react";

import Header from './componentes/Header'
import Conteudo from './componentes/Conteudo'
import Footer from './componentes/Footer'
import './App.css'

export default function App(){
  return(
    <div className="App">
      <Header />
      <Conteudo />
      <Footer />
    </div>
  )
}