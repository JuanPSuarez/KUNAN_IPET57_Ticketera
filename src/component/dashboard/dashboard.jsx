import "./dashboard.css";
function Dashboard() {
  return (
    <div className="col-lg-12 mt-3 fondo">
      <div className="it p-3">
        <span className="ti">
          <strong>Ticketera IT</strong>
        </span>
      </div>
      <div className="container_activos">
        <div>
          <form className="text-center">
            <div className="col-lg-12 p-4  form">
              <label className="user">
                {" "}
                <strong>Nuevo Activo</strong>
              </label>
            </div>

            <button className="btn btn-success m-4 p-auto">Crear</button>

            <button className="btn btn-danger m-3">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
