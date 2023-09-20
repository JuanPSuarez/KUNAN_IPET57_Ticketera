import "./create_activos.css";
import { useState } from "react";
// import { format, isValid, parse } from 'date-fns'; Verificacion De Fecha
function Create_activos() {
  const [formData, setFormData] = useState({
    nro: "",
    sistema: "",
    modelo: "",
    ram: "",
    disk: "",
    usd: "",
    estado: "",
    area: "",
    factura: "",
    email: "",
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
      newErrors.nro = "El Nro De Serie es obligatoria";
    } else if (!validateNumber(formData.edad)) {
      newErrors.nro = "El Nro De Serie debe ser un número válido";
    }

    if (!formData.sistema) {
      newErrors.sistema = "El Sistema Operativo es obligatorio";
    }

    if (!formData.modelo) {
      newErrors.modelo = "El Modelo es obligatorio";
    }

    if (!formData.ram) {
      newErrors.ram = "La Ram es obligatorio";
    }

    if (!formData.disk) {
      newErrors.disk = "El Disco es obligatorio";
    }

    if (!formData.usd) {
      newErrors.usd = "El Valor(USD) es obligatoria";
    } else if (!validateNumber(formData.usd)) {
      newErrors.usd = "El Valor(USD) debe ser un número válido";
    }

    if (!formData.estado) {
      newErrors.estado = "El Estado es obligatorio";
    }

    if (!formData.area) {
      newErrors.area = "El Area/Equipo es obligatorio";
    }

    if (!formData.factura) {
      newErrors.factura = "La Factura es obligatorio";
    }

    if (!formData.email) {
      newErrors.email = "El Email es obligatorio";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El Email no es válido";
    }

    // if (!isValid(parsedDate)) {
    //     newErrors.fecha = 'La fecha no es válida o no cumple con el formato yyyy-MM-dd';
    // } Verificacion de fecha

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulario enviado:", formData);
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
    <div className="row-a col-lg-8 d-inline-block mini_w fondo">
      <div className="p-a">
        <span className="ti">
          <strong>Ticketera IT</strong>
        </span>
        <div className="form mini p-a">
            {" "}
            <strong>Nuevo Activo</strong>
        </div>
      </div>
      <div className="row-a container_activos">
        <div>
          <form onSubmit={handleSubmit} className="text-center">
            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Imagen Del Dispositivo{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w">
                <input
                  titulo="Imagen"
                  type="file"
                  id="archivo"
                  name="archivo"
                  style={{ flex: "2" }}
                />
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  Nro De Serie
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <input
                  titulo="Numero De Serie"
                  type="text"
                  className={`form-control ${errors.nro ? "is-invalid" : ""}`}
                  id="nro"
                  name="nro"
                  value={formData.nro}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                />
                {errors.nro && (
                  <div className="invalid-feedback">{errors.nro}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Sistema Operativo{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <select
                  titulo="Sistema Operativo"
                  type="text"
                  className={`form-control ${
                    errors.sistema ? "is-invalid" : ""
                  }`}
                  id="sistema"
                  name="sistema"
                  value={formData.sistema}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                >
                  <option value="">Seleccionar...</option>
                  <option value="window">Window</option>
                  <option value="linux">Linux</option>
                  <option value="ubuntu">Ubuntu</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.sistema && (
                  <div className="invalid-feedback">{errors.sistema}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Modelo{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <select
                  titulo="Modelo"
                  className={`form-control ${
                    errors.modelo ? "is-invalid" : ""
                  }`}
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                >
                  <option value="">Seleccionar...</option>
                  <option value="intel">11th Gen Intel(R) Core(TM)</option>
                  <option value="intel">Intel® Core™ i7-10510U CP</option>
                  <option value="intel">core i7 10th gen</option>
                  <option value="intel">Core I7 - 8 generación</option>
                  <option value="intel">intel core i5 7th generation</option>
                  <option value="intel">Core i5 - 8250U </option>
                  <option value="amd">AMD Ryzen 5 3450</option>
                  <option value="ins">Inspiron 14 </option>
                  <option value="ins">Inspiron 14 i5</option>
                  <option value="ins">Inspiron 14-3467</option>
                  <option value="best">BEST T4 - i7</option>
                  <option value="bes">BES PRO T5 - i5-1155G7 </option>
                  <option value="bes">BES T4 - Core i5</option>
                  <option value="bes">BES PRO T4 - i7-1195G7</option>
                  <option value="bes">bes pro t4 - i7 10510U</option>
                  <option value="lat">Latitude 5400</option>
                  <option value="max">Max 1524 - I3 3120</option>
                  <option value="max">Max 1524</option>
                  <option value="max">MAX L5 i7</option>
                  <option value="max">Max L5</option>
                  <option value="bes">BES 15292</option>
                  <option value="v">V330-15IKB</option>
                  <option value="x">81AX</option>
                  <option value="u">X540U</option>
                  <option value="dell">Dell Inspiron 3480 - Intel core</option>
                  <option value="otro">Otro</option>

                </select>
                {errors.modelo && (
                  <div className="invalid-feedback">{errors.modelo}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Ram{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <select
                  titulo="Ram"
                  type="text"
                  className={`form-control ${errors.ram ? "is-invalid" : ""}`}
                  id="ram"
                  name="ram"
                  value={formData.ram}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                >
                  <option value="">Seleccionar...</option>
                  <option value="4GB">4GB</option>
                  <option value="8GB">8GB</option>
                  <option value="12GB">12GB</option>
                  <option value="16GB">16GB</option>
                  <option value="32GB">32GB</option>
                  <option value="64GB">64GB</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.ram && (
                  <div className="invalid-feedback">{errors.ram}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Disco{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <input
                  titulo="Disco"
                  type="text"
                  className={`form-control ${errors.disk ? "is-invalid" : ""}`}
                  id="disk"
                  name="disk"
                  value={formData.disk}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                />
                {errors.disk && (
                  <div className="invalid-feedback">{errors.disk}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  USD(valor){" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <input
                  titulo="USD"
                  type="text"
                  className={`form-control ${errors.usd ? "is-invalid" : ""}`}
                  id="usd"
                  name="usd"
                  value={formData.usd}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                />
                {errors.usd && (
                  <div className="invalid-feedback">{errors.usd}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Estado{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <select
                  titulo="Estado"
                  type="text"
                  className={`form-control ${
                    errors.estado ? "is-invalid" : ""
                  }`}
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                >
                  <option value="">Seleccionar...</option>
                  <option value="nueva">Nueva</option>
                  <option value="usada">Usada</option>
                </select>
                {errors.estado && (
                  <div className="invalid-feedback">{errors.estado}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Area/Equipo{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <select
                  titulo="Area"
                  type="text"
                  className={`form-control ${errors.area ? "is-invalid" : ""}`}
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                >
                  <option value="">Seleccionar...</option>
                  <option value="naranjax">Naranja X - Desarrollo</option>
                  <option value="silmag">SILMAG - PowerBI</option>
                  <option value="crmd">CRM - Desarrolador</option>
                  <option value="crmt">CRM - TL</option>
                  <option value="crma">CRM - Analista Funcional</option>
                  <option value="wudb">Western Union - DBA</option>
                  <option value="wub">Western Union - BPM </option>
                  <option value="wus">Western Union - Sysadmin</option>
                  <option value="wum">Western Union - Middleware</option>
                  <option value="wud">Western Union - Desarrollador </option>
                  <option value="staffa">STAFF - Administración</option>
                  <option value="staffc">STAFF - Comercial</option>
                  <option value="staffcc">STAFF - Comunicaciones</option>
                  <option value="staffr">STAFF - RRHH </option>
                  <option value="merlind">Merlin - Desarrollador</option>
                  <option value="merlint">Merlin - TL </option>
                  <option value="neural">Neural Actions</option>
                  <option value="rc">Registro Civil</option>
                  <option value="rca">Registro Civil - Analista Funcional</option>
                  <option value="rcc">Registro Civil - Coordinador </option>
                  <option value="rd">Rentas - Desarrollador </option>
                  <option value="tr">Tester - Rentas</option>
                  <option value="rd">Remoto - DBA</option>
                  <option value="gd">Gobierno - DBA </option>
                  <option value="otro">Otro</option>
                  
                  

                </select>
                {errors.area && (
                  <div className="invalid-feedback">{errors.area}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Factura{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <input
                  titulo="Factura"
                  type="text"
                  className={`form-control ${
                    errors.factura ? "is-invalid" : ""
                  }`}
                  id="factura"
                  name="factura"
                  value={formData.factura}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                />
                {errors.factura && (
                  <div className="invalid-feedback">{errors.factura}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a  form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  Contacto
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form ">
                <input
                  titulo="Mail"
                  type="text"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ flex: "2" }}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="row-a col-lg-8 d-inline-block mini_w p-a form">
                <label htmlFor="" className="form-label" style={{ flex: "1" }}>
                  {" "}
                  Fecha{" "}
                </label>
              </div>

              <div className="row-a col-lg-8 d-inline-block mini_w form">
                <input
                  titulo="Fecha"
                  type="date"
                  id="fecha"
                  name="fecha"
                  style={{ flex: "2" }}
                />
              </div>
            </div>

            <div className="botones_activos">
              <button type="submit" className="btn btn-success m-3">
                Crear
              </button>
              <button className="btn btn-danger m-3">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Create_activos;
