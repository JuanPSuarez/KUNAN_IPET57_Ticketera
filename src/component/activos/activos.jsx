import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";

import { Card, Button, Modal, Form } from "react-bootstrap";

function Activos() {
  const [activos, setActivos] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedActivo, setEditedActivo] = useState(null);
  const campoNroRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchActivos = async () => {
      const activosCollectionRef = collection(db, "activos");
      const querySnapshot = await getDocs(activosCollectionRef);
      const activosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivos(activosData);
    };

    fetchActivos();
  }, []);

  const eliminarActivo = async (id) => {
    try {
      const activoDocRef = doc(db, "activos", id);
      await deleteDoc(activoDocRef);

      const newActivos = activos.filter((activo) => activo.id !== id);
      setActivos(newActivos);
    } catch (error) {
      console.error("Error al eliminar el activo:", error);
    }
  };

  const mostrarModalEditar = (activo) => {
    setEditedActivo(activo);
    setShowEditModal(true);

    if (campoNroRef.current) {
      campoNroRef.current.focus();
    }

    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cerrarModalEditar = () => {
    setShowEditModal(false);
  };

  const handleGuardarCambios = async () => {
    try {
      const activoDocRef = doc(db, "activos", editedActivo.id);

      await updateDoc(activoDocRef, editedActivo);

      const updatedActivos = activos.map((activo) =>
        activo.id === editedActivo.id ? editedActivo : activo
      );
      setActivos(updatedActivos);

      cerrarModalEditar();
    } catch (error) {
      console.error("Error al guardar cambios:", error);
    }
  };

  return (
    <div className="container">
      <h2>Listado de Activos</h2>
      <div className="row">
        {activos.map((activo) => (
          <div className="col-lg-12 mb-12" key={activo.id}>
            <Card>
              <Card.Body>
                <Card.Title>{activo.nro}</Card.Title>
                <Card.Subtitle className="col-lg-12 mb-2 text-muted">
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
                <Button
                  variant="success"
                  onClick={() => mostrarModalEditar(activo)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => eliminarActivo(activo.id)}
                >
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal
        show={showEditModal}
        onHide={cerrarModalEditar}
        ref={modalRef}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Activo</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
          {editedActivo && (
            <Form>
              <Form.Group controlId="formNro">
                <Form.Label>Número</Form.Label>
                <Form.Control
                  type="text"
                  name="nro"
                  value={editedActivo.nro}
                  onChange={(e) =>
                    setEditedActivo({
                      ...editedActivo,
                      nro: e.target.value,
                    })
                  }
                  ref={campoNroRef}
                />
              </Form.Group>
              <Form.Group controlId="formModelo">
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                  type="text"
                  name="modelo"
                  value={editedActivo.modelo}
                  onChange={(e) =>
                    setEditedActivo({
                      ...editedActivo,
                      modelo: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Label>Sistema</Form.Label>
              <Form.Control
                type="text"
                name="sistema"
                value={editedActivo.sistema}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    sistema: e.target.value,
                  })
                }
              />

              <Form.Label>Ram</Form.Label>
              <Form.Control
                type="text"
                name="ram"
                value={editedActivo.ram}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    ram: e.target.value,
                  })
                }
              />

              <Form.Label>Disk</Form.Label>
              <Form.Control
                type="text"
                name="disk"
                value={editedActivo.disk}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    disk: e.target.value,
                  })
                }
              />

              <Form.Label>USD</Form.Label>
              <Form.Control
                type="text"
                name="usd"
                value={editedActivo.usd}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    usd: e.target.value,
                  })
                }
              />

              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="estado"
                value={editedActivo.estado}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    estado: e.target.value,
                  })
                }
              />
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={editedActivo.area}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    area: e.target.value,
                  })
                }
              />

              <Form.Label>Factura</Form.Label>
              <Form.Control
                type="text"
                name="factura"
                value={editedActivo.factura}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    factura: e.target.value,
                  })
                }
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={editedActivo.email}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    email: e.target.value,
                  })
                }
              />
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                name="fecha"
                value={editedActivo.fecha}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    fecha: e.target.value,
                  })
                }
              />

              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="estado"
                value={editedActivo.estado}
                onChange={(e) =>
                  setEditedActivo({
                    ...editedActivo,
                    estado: e.target.value,
                  })
                }
              />
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModalEditar}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleGuardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Activos;
