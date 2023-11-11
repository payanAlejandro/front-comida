import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import BarraBusqueda from './BarraBusqueda';

const Comidas = () => {
  const [comidas, setComidas] = useState([]);
  const [comidasFiltradas, setComidasFiltradas] = useState([]);

  useEffect(() => {
    //Petición para obtener todas las comidas
    axios.get('http://localhost:3002/comida')
      .then(response => {
        setComidas(response.data);
        setComidasFiltradas(response.data);
      })
      .catch(error => console.error('Error al obtener las comidas:', error));
  }, []);

  const handleBuscar = ({ nombre, region }) => {
    // Aplicar filtros y actualizar la lista de comidas filtradas
    const comidasFiltradas = comidas.filter(comida =>
      comida.nombre_comida.toLowerCase().includes(nombre.toLowerCase()) &&
      comida.region.toLowerCase().includes(region.toLowerCase())
    );

    setComidasFiltradas(comidasFiltradas);
  };

  return (
    <Container className="mt-5">
      <h1 className="display-4 text-center text-shadow">Comidas del mundo</h1>

      <BarraBusqueda onBuscar={handleBuscar} />

      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mt-3">
        {comidasFiltradas.map(comida => (
          <Col key={comida.comida_id} className="my-2">
            <Link to={`/comida/${comida.comida_id}`} style={{ textDecoration: 'none' }}>
              <Card className="h-100">
                <Card.Img variant="top" src={comida.imagen} alt={comida.nombre_comida} />
                <Card.Body>
                  <Card.Title>{comida.nombre_comida}</Card.Title>
                  <Card.Text>{comida.descripcion_comida}</Card.Text>
                  <Card.Text>Origen: {comida.region}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Comidas;
