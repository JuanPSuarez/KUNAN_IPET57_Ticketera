import React, { useState } from "react";
import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard-left/dash";

function Create_Empleado() {
  const [formData, setFormData] = useState({
    usuario: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.usuario) {
      newErrors.usuario = "El usuario es obligatorio";
    }

    if (!formData.apellido) {
      newErrors.apellido = "El apellido es obligatorio";
    }

    if (!formData.email) {
      newErrors.email = "El Email es obligatorio";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El Email no es válido";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const empleadosCollection = collection(db, "empleados");

        const nuevoEmpleado = {
          usuario: formData.usuario,
          apellido: formData.apellido,
          email: formData.email,
        };

        await addDoc(empleadosCollection, nuevoEmpleado);

        setFormData({
          usuario: "",
          apellido: "",
          email: "",
        });

        navigate("/empleados");
      } catch (error) {
        console.error("Error al agregar datos a Firestore:", error);
      }
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <Dashboard />
        </div>
        <div className="col-lg-8">
          <h2>Crear Nuevo Empleado</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className={`form-control ${errors.usuario ? "is-invalid" : ""}`}
                id="usuario"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
              />
              {errors.usuario && (
                <div className="invalid-feedback">{errors.usuario}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.apellido ? "is-invalid" : ""
                }`}
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
              {errors.apellido && (
                <div className="invalid-feedback">{errors.apellido}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Crear Empleado
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create_Empleado;
