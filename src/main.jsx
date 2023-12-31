import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Login from "./component/login/login";
import Dashboard from "./component/dashboard/dashboard";
import RestablecerPassword from "./component/restablecerPassword/restablecerPassword";
import Create_activos from "./component/create_activos/create_activos";
import Activos from "./component/activos/activos";
import EnviarMail from "./component/enviarMail/mail";
import Empleados from "./component/empleados/empleados";
import Create_empleados from "./component/create_empleados/create_empleados";
import DashboardMenu from "./component/dashboard/dashboard";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/enviarMail",
    element: <EnviarMail />,
  },
  {
    path: "/dashboardMenu",
    element: <DashboardMenu />,
  },
  {
    path: "/create_activos",
    element: <Create_activos />,
  },
  {
    path: "/activos",
    element: <Activos />,
  },
  {
    path: "/empleados",
    element: <Empleados />,
  },
  {
    path: "/create_empleados",
    element: <Create_empleados />,
  },
  {
    path: "/restablecerPassword",
    element: <RestablecerPassword />,
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
