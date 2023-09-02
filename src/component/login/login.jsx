import CampoTexto from "./crearComponentes/crearComponentes";
import "./login.css";
function Login() {
  const manejoDeEnvio = (e) => {
    e.preventDefault();
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
        <form onSubmit={manejoDeEnvio}>
          <CampoTexto titulo="Usuario" placeholder="Usuario" type="text" />
          <CampoTexto
            titulo="Contraseña"
            placeholder="Contraseña"
            type="password"
            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}"
          />

          <div className="col-lg-12">
            <button className="btn btn-primary  mt-3">Iniciar</button>
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
