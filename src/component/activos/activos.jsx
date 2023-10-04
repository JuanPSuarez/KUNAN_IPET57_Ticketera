import "./activos.css";
import React, { useState, useEffect } from 'react';
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import Card from "react-bootstrap/Card"; 
import Button from "react-bootstrap/Button"; 
function Activos() {

  const [activos, setActivos] = useState([]);

  useEffect(() => {
    const fetchActivos = async () => {
      const activosCollectionRef = collection(db, "activos");
      const querySnapshot = await getDocs(activosCollectionRef);
      const activosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setActivos(activosData);
    };

    fetchActivos();
  }, []);

  return (
    <div className="container">
      <h2>Listado de Activos</h2>
      <div className="row">
        {activos.map(activo => (
          <div className="col-lg-6 mb-4" key={activo.id}>
            <Card>
              <Card.Body>
                <Card.Title>{activo.nro}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Modelo: {activo.modelo}
                </Card.Subtitle>
                <Card.Text className="">
                  Sistema Operativo: {activo.sistema}
                  <br />
                  RAM: {activo.ram}
                  <br />
                  Disco: {activo.disk}
                  <br />
                  Valor (USD): {activo.usd}
                  <br />
                  Estado: {activo.estado}
                  <br />
                  Area/Equipo: {activo.area}
                  <br />
                  Factura: {activo.factura}
                  <br />
                  Contacto: {activo.email}
                  <br />
                  Fecha: {activo.fecha}
                </Card.Text>
                  <Button variant="success">Editar</Button>
                  <Button variant="danger">Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Activos;
