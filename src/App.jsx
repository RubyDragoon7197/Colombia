import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componentes/Home'
import Detalles from './componentes/Detalles'
import Favoritos from './componentes/Favoritos'
import Original from './componentes/Original'
import Informativa from './componentes/Informativa'

function App() {

  return (
    <>
        <Router>

        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/Informativa">Informativa</Link>
          <Link to="/Original">Original</Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link to="/Detalles">Detalles</Link>
        </nav>


      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/Informativa" element={<Informativa /> } />
          <Route path="/Original" element={<Original /> } />
          <Route path="/Favoritos" element={<Favoritos /> } />
          <Route path="/Detalles/:depto/:municipio" element={<Detalles /> } />
      </Routes>
    </Router>


    </>
  )
}

export default App
