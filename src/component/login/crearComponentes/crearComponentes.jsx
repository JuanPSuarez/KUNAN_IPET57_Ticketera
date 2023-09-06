import { useState } from "react";
import { useHistory } from "react-dom/client"; // Agrega la importación de useHistory

const CampoTexto = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const history = useHistory;

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
    if (formData.username.trim() === "") {
      newErrors.username = "El nombre de usuario es obligatorio";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "La contraseña es obligatoria";
    }

    if (formData.username === "admin" && formData.password === "admin") {
      // Inicio de sesión exitoso, redirige a la ruta /dashboard
      setSubmitted(true);
      history.push("/dashboard");
    } else {
      // Datos de inicio de sesión incorrectos, muestra un error
      newErrors.login = "Credenciales incorrectas";
      setErrors(newErrors);
    }
  };

  return (
    <div className="col-lg-12 form">
      <div>
        <label>{props.titulo}</label>
      </div>
      <div>
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={formData[props.name]}
          onChange={handleChange}
        />
        {errors[props.name] && <p className="error">{errors[props.name]}</p>}
      </div>
    </div>
  );
};

export default CampoTexto;
