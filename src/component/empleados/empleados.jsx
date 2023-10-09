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
import Dashboard from "../dashboard-left/dash";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedEmpleado, setEditedEmpleado] = useState(null);
  const modalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [empleadoToDelete, setEmpleadoToDelete] = useState(null);

  useEffect(() => {
    const fetchEmpleados = async () => {
      const empleadosCollectionRef = collection(db, "empleados");
      const querySnapshot = await getDocs(empleadosCollectionRef);
      const empleadosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmpleados(empleadosData);
    };

    fetchEmpleados();
  }, []);

  const mostrarModalEliminar = (empleado) => {
    setEmpleadoToDelete(empleado);
    setShowDeleteModal(true);

    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cerrarModalEliminar = () => {
    setShowDeleteModal(false);

    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const eliminarEmpleado = async (id) => {
    try {
      const empleadoDocRef = doc(db, "empleados", id);
      await deleteDoc(empleadoDocRef);

      const newEmpleados = empleados.filter((empleado) => empleado.id !== id);
      setEmpleados(newEmpleados);

      cerrarModalEliminar();
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };

  const mostrarModalEditar = (empleado) => {
    setEditedEmpleado(empleado);
    setShowEditModal(true);

    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cerrarModalEditar = () => {
    setShowEditModal(false);
  };

  const handleGuardarCambios = async () => {
    try {
      const empleadoDocRef = doc(db, "empleados", editedEmpleado.id);

      await updateDoc(empleadoDocRef, editedEmpleado);

      const updatedEmpleados = empleados.map((empleado) =>
        empleado.id === editedEmpleado.id ? editedEmpleado : empleado
      );
      setEmpleados(updatedEmpleados);

      cerrarModalEditar();
    } catch (error) {
      console.error("Error al guardar cambios:", error);
    }
  };

  return (
    <div className="container-fluid">
      <Dashboard />
      <h2>Listado de Empleados</h2>
      <div className="row " style={{ overflowY: "auto", maxHeight: "83vh" }}>
        {empleados.map((empleado) => (
          <div className="col-lg-4 col-sm-12 mb-3" key={empleado.id}>
            <Card>
              <Card.Body>
                <Card.Title>{empleado.usuario}</Card.Title>
                <Card.Subtitle className="col-lg-12 mb-2 text-muted">
                  Apellido: {empleado.apellido}
                </Card.Subtitle>
                <Card.Text className="">
                  Email: {empleado.email}
                  <br />
                  Otros datos del empleado...
                </Card.Text>
                <Button
                  variant="danger m-2"
                  onClick={() => mostrarModalEliminar(empleado)}
                >
                  Eliminar
                </Button>
                <Button
                  variant="primary m-2"
                  onClick={() => mostrarModalEditar(empleado)}
                >
                  Checkint
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/*  */}

      <Modal
        show={showDeleteModal}
        onHide={cerrarModalEliminar}
        ref={deleteModalRef}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este activo?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => eliminarEmpleado(empleadoToDelete.id)}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Empleados;
