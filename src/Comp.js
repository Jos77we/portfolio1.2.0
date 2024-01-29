import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from './App';
import Resume from './pages/Resume'
import Skills from './pages/Skills'
import Product from './pages/Product';

const Comp = () => {
  return (
    <Routes>
      
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/skills" element={<Skills/>}/>
      
      </Routes>
  )
}

export default Comp