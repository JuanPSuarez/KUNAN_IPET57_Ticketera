import CampoTexto from "../login/crearComponentes/crearComponentes";
import "./create_activos.css";
import React, { useState } from 'react';
// import { format, isValid, parse } from 'date-fns'; Verificacion De Fecha
function Create_activos() {

    const [formData, setFormData] = useState({
        nro: '',
        sistema: '',
        modelo: '',
        ram: '',
        disk: '',
        usd: '',
        estado: '',
        area: '',
        factura: '',
        email: '',
        // fecha: '',
      });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};

        if (!formData.nro) {
            newErrors.nro = 'El Nro De Serie es obligatoria';
        } else if (!validateNumber(formData.edad)) {
            newErrors.nro = 'El Nro De Serie debe ser un número válido';
        }
    
        if (!formData.sistema) {
          newErrors.sistema = 'El Sistema Operativo es obligatorio';
        }

        if (!formData.modelo) {
            newErrors.modelo = 'El Modelo es obligatorio';
          }

        if (!formData.ram) {
            newErrors.ram = 'La Ram es obligatorio';
        }

        if (!formData.disk) {
            newErrors.disk = 'El Disco es obligatorio';
        }

        if (!formData.usd) {
            newErrors.usd = 'El Valor(USD) es obligatoria';
        } else if (!validateNumber(formData.usd)) {
            newErrors.usd = 'El Valor(USD) debe ser un número válido';
        }

        if (!formData.estado) {
            newErrors.estado = 'El Estado es obligatorio';
        }

        if (!formData.area) {
            newErrors.area = 'El Area/Equipo es obligatorio';
        }

        if (!formData.factura) {
            newErrors.factura = 'La Factura es obligatorio';
        }

        if (!formData.email) {
          newErrors.email = 'El Email es obligatorio';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'El Email no es válido';
        }

        // if (!isValid(parsedDate)) {
        //     newErrors.fecha = 'La fecha no es válida o no cumple con el formato yyyy-MM-dd';
        // } Verificacion de fecha 

    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          console.log('Formulario enviado:', formData);
        }
      };
    
      const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      };
    
      const validateNumber = (number) => {
        return !isNaN(parseFloat(number)) && isFinite(number);
      };

    //   const parsedDate = parse(formData.fecha, 'yyyy-MM-dd', new Date()); Verificacion de fecha

    return (
        <div className="row col-9 d-inline-block fondo">
            
                <div className="p-1">
                    <span className="ti">
                        <strong>Ticketera IT</strong>
                    </span>
                    <div className="form mini p-1">
                        <label > <strong>Nuevo Activo</strong></label>
                    </div>
                </div>
            <div className="row container_activos">
                <div>
                    <form onSubmit={handleSubmit} className="text-center">

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Imagen Del Dispositivo </label>
                        </div>

                        <div className="row col-9 d-inline-block">
                            <input 
                            titulo="Imagen"
                            type="file"
                            id="archivo" 
                            name="archivo"
                            style={{ flex: '2' }} 
                            />
                        </div>
                    </div>


                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}>Nro De Serie</label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input
                            titulo="Numero De Serie"
                            type="text"
                            className={`form-control ${errors.nro ? 'is-invalid' : ''}`}
                            id="nro"
                            name="nro"
                            value={formData.nro}
                            onChange={handleChange}
                            style={{ flex: '2' }}
                            />
                            {errors.nro && (
                                <div className="invalid-feedback">{errors.nro}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Sistema Operativo </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input 
                            titulo="Sistema Operativo"
                            type="text"
                            className={`form-control ${errors.sistema ? 'is-invalid' : ''}`}
                            id="sistema"
                            name="sistema" 
                            value={formData.sistema}
                            onChange={handleChange}
                            style={{ flex: '2' }} 
                            />
                            {errors.sistema && (
                                <div className="invalid-feedback">{errors.sistema}</div>
                            )}
                        </div>

                    </div>
                        

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Modelo </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input 
                                titulo="Modelo"
                                type="text"
                                className={`form-control ${errors.modelo ? 'is-invalid' : ''}`}
                                id="modelo"
                                name="modelo" 
                                value={formData.modelo}
                                onChange={handleChange}
                                style={{ flex: '2' }} 
                            />
                            {errors.modelo && (
                                <div className="invalid-feedback">{errors.modelo}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Ram </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input 
                                titulo="Ram"
                                type="text"
                                className={`form-control ${errors.ram ? 'is-invalid' : ''}`}
                                id="ram"
                                name="ram" 
                                value={formData.ram}
                                onChange={handleChange}
                                style={{ flex: '2' }} 
                            />
                            {errors.ram && (
                                <div className="invalid-feedback">{errors.ram}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Disco </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input 
                                titulo="Disco"
                                type="text"
                                className={`form-control ${errors.disk ? 'is-invalid' : ''}`}
                                id="disk"
                                name="disk" 
                                value={formData.disk}
                                onChange={handleChange}
                                style={{ flex: '2' }} 
                            />
                            {errors.disk && (
                                <div className="invalid-feedback">{errors.disk}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> USD(valor) </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                        <input 
                                titulo="USD"
                                type="text"
                                className={`form-control ${errors.usd ? 'is-invalid' : ''}`}
                                id="usd"
                                name="usd" 
                                value={formData.usd}
                                onChange={handleChange}
                                style={{ flex: '2' }} 
                            />
                            {errors.usd && (
                                <div className="invalid-feedback">{errors.usd}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Estado </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input 
                                titulo="Estado"
                                type="text"
                                className={`form-control ${errors.estado ? 'is-invalid' : ''}`}
                                id="estado"
                                name="estado" 
                                value={formData.estado}
                                onChange={handleChange}
                                style={{ flex: '2' }}
                            />
                            {errors.estado && (
                                <div className="invalid-feedback">{errors.estado}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Area/Equipo </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input 
                                titulo="Area"
                                type="text"
                                className={`form-control ${errors.area ? 'is-invalid' : ''}`}
                                id="area"
                                name="area" 
                                value={formData.area}
                                onChange={handleChange}
                                style={{ flex: '2' }} 
                            />
                            {errors.area && (
                                <div className="invalid-feedback">{errors.area}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Factura </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                        <input 
                                titulo="Factura"
                                type="text"
                                className={`form-control ${errors.factura ? 'is-invalid' : ''}`}
                                id="factura"
                                name="factura" 
                                value={formData.factura}
                                onChange={handleChange}
                                style={{ flex: '2' }} 
                            />
                            {errors.factura && (
                                <div className="invalid-feedback">{errors.factura}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1  form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}>Contacto</label>
                        </div>

                        <div className="row col-9 d-inline-block form ">
                            <input 
                                titulo="Mail"
                                type="text"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ flex: '2' }}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="row col-9 d-inline-block p-1 form">
                            <label htmlFor="" className="form-label" style={{ flex: '1' }}> Fecha </label>
                        </div>

                        <div className="row col-9 d-inline-block form">
                            <input
                            titulo="Fecha" 
                            type="date"
                            id="fecha" 
                            name="fecha"
                            style={{ flex: '2' }} 
                            />
                        </div>
                    </div>

                    <div className="botones_activos">
                        <button type="submit" className="btn btn-success m-3">Crear</button>
                        <button className="btn btn-danger m-3">Cancelar</button>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default Create_activos;