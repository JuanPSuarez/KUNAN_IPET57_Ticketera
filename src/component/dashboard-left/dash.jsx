import "./dash-left.css";
function Dashboard() {
  return (
    <div class="sidebar text-center">
      <span>
        <a href="/DashboardMenu">
          <img
            src="public\logo-nuevo-kunan-sin-letras-removebg-preview.png"
            alt=""
            width="35px"
            height="35px"
          ></img>
        </a>
      </span>
      <a class="nav-link" href="/empleados">
        <i class="fa-regular fa-user "></i>
      </a>
      <a class="nav-link" href="create_empleados">
        <i class="fa-solid fa-user-plus"></i>
      </a>
      <a class="nav-link" href="/activos">
        <i class="fa-solid fa-computer"></i>
      </a>
      <a class="nav-link" href="/create_activos">
        <i class="fa-solid fa-laptop-medical"></i>
      </a>
      <a class="nav-link" href="#">
        <i class="fa-regular fa-calendar"></i>
      </a>
      <a class="nav-link" href="/empleados">
        <i class="fa-solid fa-fire"></i>
      </a>
      <a class="nav-link" href="#">
        <i class="fa-solid fa-chart-pie"></i>
      </a>
    </div>
  );
}
export default Dashboard;
