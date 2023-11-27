import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tarefas from './pages/Tarefas';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



