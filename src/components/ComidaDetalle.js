import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const ComidaDetalle = () => {
  const { id } = useParams();
  const [comida, setComida] = useState(null);

  useEffect(() => {
    //Petición para obtener la comida por el id
    axios.get(`http://localhost:3002/comida/${id}`)
      .then(response => setComida(response.data))
      .catch(error => console.error('Error al obtener la comida:', error));
  }, [id]);

  if (!comida) {
    return <p>Cargando...</p>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '30rem', textAlign: 'center' }}>
        <Card.Img variant="top" src={comida.imagen} />
        <Card.Body>
          <Card.Title>{comida.nombre_comida}</Card.Title>
          <Card.Text>{comida.descripcion_comida}</Card.Text>
          <Card.Text>Origen: {comida.region}</Card.Text>
          <Card.Text>Tipo de comida: {comida.tipo_comida}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ComidaDetalle;
