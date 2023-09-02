import Componentes from "./componentes/componetes";
import "./restablecerPassword.css";

function RestablecerPassword() {
  const manejoDeEnvio = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="col-lg-12 mt-1">
      <img
        src="../public/Logo Kunan Vertical 1.png"
        alt="img kunan"
        className="img"
      />
      <div className="col-lg-12 p3">
        <div className="col-lg-12 p3">
          <span className="title ">
            Revisa y gestiona tu inventario de Activos tecnológicos
          </span>
        </div>
      </div>
      <div className="col-lg-12 mt-3 form">
        <h3>
          Restablecer <br /> contraseña{" "}
        </h3>
        <form onSubmit={manejoDeEnvio}>
          <Componentes titulo="Codigo" placeholder="Codigo" type="text" />
          <Componentes
            titulo="Nueva Contraseña"
            placeholder="Nueva Contraseña"
            type="password"
            name="newpassword"
            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}"
          />
          <Componentes
            titulo="Repita Contraseña"
            placeholder=" Repita Contraseña"
            type="password"
            name="newpassword"
            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}"
          />

          <div className=" col-lg-12 ">
            <button className="btn btn-primary  mt-3">Restablecer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RestablecerPassword;
