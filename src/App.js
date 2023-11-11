import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comidas from './components/Comidas';
import ComidaDetalle from './components/ComidaDetalle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Comidas />} />
        <Route path="/comida/:id" element={<ComidaDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
