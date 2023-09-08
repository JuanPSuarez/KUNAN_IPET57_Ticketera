import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import Card from "./props/card";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create_activos");
  };

  return (
    <div className="col-lg-12  fondo">
      <div className="col-lg-12 mb-3 fondo">
        <img src="/public/Logo Kunan Vertical 1.png" alt="" />
      </div>
      <span>Revisa y gestiona tu inventario de Activos tecnológicos</span>
      <div className="col-lg-12 mt-4">
        <button className="btn  btn-primary" onClick={handleClick}>
          Nuevo Activo
        </button>
      </div>
      <div className="row mt-5">
        <Card titulo="Asignadas" subTitulo="Maquinas Asignadas" />
        <Card titulo="Disponibles" subTitulo="Maquinas en Inventario" />
        <Card titulo="Total de Equipos" subTitulo="i5" />
        <Card titulo="Equipos y Hardware" />
      </div>
      {/* <div className="col-lg-12 mt-2">
        <button className="btn  btn-primary " onChange={handleClick}>
          Actualizar
        </button>
      </div> */}
    </div>
  );
}
export default Dashboard;
