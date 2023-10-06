function Dash(){
    return (
    <div className="container-fluid dashboard">
      <div className="row">
        <nav className="d-md-block sidebar h">
          <div className="sidebar-sticky ">
            <ul className="nav flex-column text-center">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-wh">
                <span><a href="/"><img src="public/logo-nuevo-kunan.png" alt="" width="150" height="50"/></a></span>
              </h6>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  <i className="fa-regular fa-user "></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/activos">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-regular fa-image"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-regular fa-calendar"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/empleados">
                  <i className="fa-solid fa-fire"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-chart-pie"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    );
}
export default Dash;