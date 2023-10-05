import "./empleados.css";
import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Card, Button, Modal, Form } from "react-bootstrap";

function Empleados() {

  const [Empleado, setempleado] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedempleado, setEditedempleado] = useState(null);
  const campoNroRef = useRef(null);
  const modalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [empeladoToDelete, setempleadoToDelete] = useState(null);

  useEffect(() => {
    const fetchEmpleados = async () => {
      const empleadosCollectionRef = collection(db, "empleados");
      const querySnapshot = await getDocs(empleadosCollectionRef);
      const empleadoData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set(empleadoData);
    };


    fetchEmpleados();
  }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/nuevo_empleado");
  };
  const mostrarModalEliminar = (empleado) => {
    setempleadoToDelete(empleado);
    setShowDeleteModal(true);

    if (campoNroRef.current) {
      campoNroRef.current.focus();
    }

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

  const eliminarempleado = async (id) => {
    try {
      const empleadoDocRef = doc(db, "empleado", id);
      await deleteDoc(empleadoDocRef);

      const newempleado = activos.filter((empleado) => empleado.id !== id);
      setempleado(newempleado);

      cerrarModalEliminar(); 
    } catch (error) {
      console.error("Error al eliminar el Empelado:", error);
    }
  };

  const mostrarModalEditar = (Empleado) => {
    setEditedempleado(Empleado);
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
    <Modal/>
  };

  const handleGuardarCambios = async () => {
    try {
      const empleadoDocRef = doc(db, "empleados", editedempleado.id);

      await updateDoc(empleadoDocRef, editedempleado);

      const updatedempleado = Empleado.map((Empleado) =>
        Empleado.id === editedempleado.id ? editedempleado : Empleado
      );
      setempleado(updatedempleado);

      cerrarModalEditar();
    } catch (error) {
      console.error("Error al guardar cambios:", error);
    }
  };
  
  return (
    <div className="container-fluind">
      <h2>Lista de Empleado</h2>
      <div className="row" >
        {Empleado.map((Empleado) => (
          <div className="col-lg-4 col-sm-12 mb-3 " key={Empleado.id} >
            <Card >
              <Card.Body >
                <Card.Title>{Empleado.nro}</Card.Title>
                
                <Card.Text className="">
                  nombre: {Empleado.nombre}
                  <br />
                  Apellido: {Empleado.apellido}
                  <br />
                  Contacto: {Empleado.email}
                  
                </Card.Text>
                <Button 
                  variant="success m-2"
                  onClick={() => mostrarModalEditar(Empleado)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger m-2"
                  onClick={() => mostrarModalEliminar(Empleado)}
                >
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="col-lg-12 mt-4 d-flex justify-content-end">
       
        <button className="btn  btn-primary" onClick={handleClick}>
          Nuevo Empelado
        </button>
      </div>

      <Modal
        className=""
        show={showEditModal}
        onHide={cerrarModalEditar}
        ref={modalRef}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Empleado</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
          {editedempleado && (
            <Form>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={editedempleado.nombre}
                onChange={(e) =>
                  setEditedempleado({
                    ...editedempleado,
                    nombre: e.target.value,
                  })
                }
              />
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={editedempleado.apellido}
                onChange={(e) =>
                  setEditedempleado({
                    ...editedempleado,
                    apellido: e.target.value,
                  })
                }
              />
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={editedempleado.email}
                onChange={(e) =>
                  setEditedempleado({
                    ...editedempleado,
                    email: e.target.value,
                  })
                }
              />
              

            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button 
           variant="secondary"
           onClick={cerrarModalEditar}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleGuardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={showDeleteModal}
        onHide={cerrarModalEliminar}
        ref={deleteModalRef} style={{ maxHeight: "100vh", overflowY: "auto" }} >
        <Modal.Header closeButton>
          <Modal.Title >Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este Empleado?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => eliminarempleado(empeladoToDelete.id)}
          >
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Empleados;
