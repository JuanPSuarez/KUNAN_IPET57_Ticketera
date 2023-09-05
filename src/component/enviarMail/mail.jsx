import Componentes from "./componentes/componentes";
import "./mail.css";

function Enviarmail() {
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
        <form onSubmit={manejoDeEnvio}>
          <Componentes
            titulo="Mail del usuario"
            placeholder="Ingrese su mail"
            type="text"
            name="mail"
        
          />

          <div className=" col-lg-12 ">
            <button className="btn btn-primary  mt-3">Enviar Mail</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Enviarmail;
