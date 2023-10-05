import "./nuevo_empleado.css";
import React, { useState } from "react";
import { db } from "../firebase/firebase-config"
import { collection, addDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

function Nuevo_empleado() {
  const [formData, setFormData] = useState({
    nombre: "",
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

  const handleClick = () => {
    navigate("/empelados");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.nombre) {
      newErrors.nombre = "El Nombre es obligatorio";
    }

    if (!formData.apellido) {
      newErrors.apellido = "El apellido es obligatoria";
    } 

    if (!formData.email) {
      newErrors.email = "El Email es obligatorio";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El Email no es válido";
    }


    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Si no hay errores de validación, agrega los datos a Firestore
        const empleadosCollection = collection(db, "empleados");

        // Crea un objeto con los datos válidos
        const nuevoempleado = {
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
      
        };

        // Agrega el nuevo activo a Firestore

        await addDoc(empleadosCollection, nuevoempleado);

        // Limpia el formulario después de agregar los datos
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
        
        });
        navigate("/empleados");
      } catch (error) {
        console.error("Error al agregar datos a Firestore:", error);
      }
    
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }



  //   const parsedDate = parse(formData.fecha, 'yyyy-MM-dd', new Date()); Verificacion de fecha

  return (
      <div className="container-fluid">
        <div className="row-a col-lg-8 d-inline-block mini_w fondo">
          <div className="p-a">
            <div className="form mini p-a">
              {" "}
              <strong>Empleados</strong>
            </div>
          </div>
        </div>
        <div className="row-a container_activos ">
          
            <form onSubmit={handleSubmit} className="text-center">
            

              <div className="form-group d-flex aling-items-center ">
                <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                  <label htmlFor="" className="form-label" style={{ flex: "1" }}> Nombre </label>
                </div>

                <div className="row-a col-lg-8 d-inline-block mini_w form">
                  <input titulo="nombre" type="text" className={`form-control ${errors.nombre ? "is-invalid" : ""}`} id="nombre" name="nombre" value={formData.nombre}onChange={handleChange}style={{ flex: "2" }}/>
                  {errors.nombre && (<div className="invalid-feedback">{errors.nombre}</div>)}
                </div>
              </div>

              <div className="form-group d-flex aling-items-center">
                <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                  <label htmlFor="" className="form-label" style={{ flex: "1" }}>Apellido</label>
                </div>

                <div className="row-a col-lg-8 d-inline-block mini_w form">
                  <input titulo="apellido" type="text" className={`form-control ${errors.apellido ? "is-invalid" : ""}`} id="apellido" name="apellido" value={formData.apellido} onChange={handleChange}style={{ flex: "2" }}/>
                  {errors.apellido && (<div className="invalid-feedback">{errors.apellido}</div>)}
                </div>
              </div>

            
              <div className="form-group d-flex aling-items-center">
                <div className="row-a col-lg-8 d-inline-block mini_w p-a  form">
                  <label htmlFor="" className="form-label" style={{ flex: "1" }}>Contacto</label>
                </div>

                <div className="row-a col-lg-8 d-inline-block mini_w form ">
                  <input titulo="email" type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" name="email" value={formData.email} onChange={handleChange} style={{ flex: "2" }}/>
                  {errors.email && ( <div className="invalid-feedback">{errors.email}</div>)}
                </div>
              </div>

        

              <div className="botones_activos">
                <button type="submit" className="btn btn-success m-3" onClick={handleClick}>
                  Crear
                </button>
                <a href="/activos" className="btn btn-danger m-3">
                  Cancelar
                </a>
              </div>
            </form>
        </div>
      </div>
  );
  }
export default Nuevo_empleado;