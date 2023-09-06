import "./login.css";
import CampoTexto from "./crearComponentes/crearComponentes";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // La lógica de inicio de sesión se maneja en el componente CampoTexto
  };

  return (
    <div className="col-lg-12 mt-3 fondo">
      <img
        src="../public/Logo Kunan Vertical 1.png"
        alt="img kunan"
        className="img"
      />
      <div>
        <div className="col-lg-12 p-3">
          <span className="title ">
            Revisa y gestiona tu inventario de Activos tecnológicos
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <CampoTexto
            titulo="Usuario"
            placeholder="Usuario"
            type="text"
            name="username"
          />
          <CampoTexto
            titulo="Contraseña"
            placeholder="Contraseña"
            name="password"
            type="password"
          />
          <div className="col-lg-12">
            <button className="btn btn-primary  mt-3" onChange={handleSubmit}>
              Iniciar Sesión
            </button>
            <div className="col-lg-12">
              <span>
                <a href="/restablecerPassword" className="btn btn mt-2">
                  Olvidaste tu contraseña?
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
