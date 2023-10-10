import "./login.css";
import CampoTexto from "./crearComponentes/crearComponentes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

function uploadSomething() {
  return new Promise((resolve) => setTimeout(resolve, 6000));
}

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (formData.username.trim() === "") {
      newErrors.username = "El nombre de usuario es obligatorio";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "La contraseña es obligatoria";
    }

    if (formData.username === "admin" && formData.password === "admin") {
      await toast.promise(uploadSomething, {
        error: "Error los datos no son iguales",
        loading: "Entrando...",
        success: "Bienvenido a Ticketera",
      });

      setTimeout(() => {
        setSubmitted(true);
        navigate("/dashboardMenu");
      }, 7000);
    } else {
      toast.error("Credenciales incorrectas");
      setErrors(newErrors);
    }
  };

  return (
    <div className="col-lg-12 mt-3 ">
      <img
        src="../public/Logo Kunan Vertical 1.png"
        alt="img kunan"
        className="img"
      />
      <div>
        <div className="col-lg-12 p-3">
          <span className="title">
            Revisa y gestiona tu inventario de Activos tecnológicos
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <CampoTexto
            titulo="Usuario"
            placeholder="Usuario"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <CampoTexto
            titulo="Contraseña"
            placeholder="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="col-lg-12">
            <button className="btn btn-primary mt-3" type="submit">
              Iniciar Sesión
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
