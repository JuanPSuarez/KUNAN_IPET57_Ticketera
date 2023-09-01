import "./login.css";
function Login() {
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
        <form>
          <div className="col-lg-12  form">
            <label name="user">Usuario</label>
          </div>

          <div className="col-lg-12  form">
            <input type="text" name="user" />
          </div>
          <div className="col-lg-12  form">
            {" "}
            <label name="password">Contraseña</label>
          </div>
          <div className="col-lg-12  form">
            <input
              type="password"
              name="password"
              pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}"
            />
          </div>

          <div className="col-lg-12">
            <button
              type="submit"
              className="btn btn-primary  mt-3"
            >
              Iniciar
            </button>
            <div className="col-lg-12">
              <span>
                <a href=""className="btn btn mt-2" >Olvidaste tu contraseña?</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
