import "./restablecerPassword.css"

function RestablecerPassword() {
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
        <h3>Restablecer <br /> contraseña </h3>
        <form>
        <div className=" col-lg-12 mt-3 ">
          <label name="codigo" >Codigo</label>
        </div>
        <div className=" col-lg-12 ">
          <input type="text" name="codigo"/>
        </div>
        <div className=" col-lg-12 mt-3 ">
          <label name="newpass" >nueva contraseña</label>
        </div>
        <div className=" col-lg-12 ">
          <input 
            type="password" 
            name="newpass"
            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}"
          />
        </div>
        <div className=" col-lg-12 mt-3 ">
          <label name="newpass" >confirmar contraseña</label>
        </div>
        <div className=" col-lg-12 ">
          <input 
            type="password" 
            name="newpass"
            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}"
          />
        </div>
        <div className=" col-lg-12 ">
          <button
              type="submit"
              className="btn btn-primary  mt-3"
            >
              Restablecer
          </button>
        </div>
        





      </form>
      </div>
      
    
    </div>
  );
}
export default RestablecerPassword;
