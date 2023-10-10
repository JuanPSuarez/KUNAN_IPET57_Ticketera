import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
} from "@firebase/firestore";

import { Card, Button, Modal, Form, Dropdown } from "react-bootstrap";
import Dashboard from "../dashboard-left/dash";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedEmpleado, setEditedEmpleado] = useState(null);
  const [showActivosList, setShowActivosList] = useState(false);
  const modalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [empleadoToDelete, setEmpleadoToDelete] = useState(null);
  const [activos, setActivos] = useState([]);
  const [selectedActivoModelo, setSelectedActivoModelo] = useState("");
  const [selectedEmpleadoActivo, setSelectedEmpleadoActivo] =
    useState("Activo");

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

    const fetchActivos = async () => {
      const activosCollectionRef = collection(db, "activos");
      const querySnapshot = await getDocs(activosCollectionRef);
      const activosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivos(activosData);
    };

    fetchEmpleados();
    fetchActivos();
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
    setShowActivosList(true);

    if (empleado.activoAsignado) {
      setShowEditModal(false);
    } else {
      setShowEditModal(true);
    }

    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cerrarModalEditar = () => {
    setShowActivosList(false);
    setShowEditModal(false);
    setSelectedActivoModelo("");
    setSelectedEmpleadoActivo("Activo");
  };

  const asignarActivo = async () => {
    try {
      const empleadoDocRef = doc(db, "empleados", editedEmpleado.id);
      await updateDoc(empleadoDocRef, {
        activoAsignado: selectedActivoModelo,
      });

      const empleadoActualizado = {
        ...editedEmpleado,
        activoAsignado: selectedActivoModelo,
      };

      const updatedEmpleados = empleados.map((empleado) =>
        empleado.id === editedEmpleado.id ? empleadoActualizado : empleado
      );
      setEmpleados(updatedEmpleados);

      setSelectedEmpleadoActivo(selectedActivoModelo || "Activo");

      guardarCheckin(selectedActivoModelo, editedEmpleado);

      cerrarModalEditar();
    } catch (error) {
      console.error("Error al asignar el activo al empleado:", error);
    }
  };

  const quitarActivo = async () => {
    try {
      const empleadoDocRef = doc(db, "empleados", editedEmpleado.id);
      await updateDoc(empleadoDocRef, {
        activoAsignado: null,
      });

      const empleadoActualizado = {
        ...editedEmpleado,
        activoAsignado: null,
      };

      const updatedEmpleados = empleados.map((empleado) =>
        empleado.id === editedEmpleado.id ? empleadoActualizado : empleado
      );
      setEmpleados(updatedEmpleados);

      setSelectedEmpleadoActivo("Activo");

      guardarCheckin(editedEmpleado.activoAsignado, editedEmpleado);

      cerrarModalEditar();
    } catch (error) {
      console.error("Error al quitar el activo del empleado:", error);
    }
  };

  const guardarCheckin = async (modeloActivo, empleado) => {
    try {
      const checkinCollectionRef = collection(db, "checkint");
      await addDoc(checkinCollectionRef, {
        activos: modeloActivo,
        empleado: `${empleado.nombre} ${empleado.apellido}`,
        estado: selectedEmpleadoActivo,
      });
    } catch (error) {
      console.error("Error al guardar el registro de checkin:", error);
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
                  Estado: {selectedEmpleadoActivo}
                  <br />
                  {empleado.activoAsignado ? (
                    <div>
                      Modelo: {empleado.activoAsignado}
                      <br />
                    </div>
                  ) : (
                    "Ningún activo asignado"
                  )}
                </Card.Text>
                <Button
                  variant="danger m-2"
                  onClick={() => mostrarModalEliminar(empleado)}
                >
                  Eliminar
                </Button>
                {empleado.activoAsignado ? (
                  <Button variant="danger m-2" onClick={() => quitarActivo()}>
                    Check out
                  </Button>
                ) : (
                  <Button
                    variant="primary m-2"
                    onClick={() => mostrarModalEditar(empleado)}
                  >
                    Check in
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

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
          ¿Estás seguro de que deseas eliminar este empleado?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => eliminarEmpleado(empleadoToDelete.id)}
          >
            Eliminar
          </Button>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showEditModal}
        onHide={cerrarModalEditar}
        ref={modalRef}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showActivosList ? (
            <div>
              <h3>Selecciona un Activo:</h3>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-activo">
                  {selectedActivoModelo || "Selecciona un activo"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {activos.map((activo) => (
                    <Dropdown.Item
                      key={activo.id}
                      onClick={() => setSelectedActivoModelo(activo.modelo)}
                    >
                      {activo.modelo}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="primary mt-3" onClick={() => asignarActivo()}>
                Asignar
              </Button>
            </div>
          ) : (
            <Form></Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Empleados;
