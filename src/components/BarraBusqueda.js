import React, { useState } from 'react';

const BarraBusqueda = ({ onBuscar }) => {
  const [nombre, setNombre] = useState('');
  const [region, setRegion] = useState('');

  const handleBuscar = () => {
    //Función de búsqueda en el componente padre
    onBuscar({ nombre, region });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="input-group mb-2">
            <span className="input-group-text">Nombre:</span>
            <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text">Región:</span>
            <input type="text" className="form-control" value={region} onChange={(e) => setRegion(e.target.value)} />
          </div>

          <button className="btn btn-dark mt-2" onClick={handleBuscar}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarraBusqueda;
