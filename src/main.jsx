import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./component/login/login";
import Dashboard from "./component/dashboard/dashboard";
import RestablecerPassword from "./component/restablecerPassword/restablecerPassword";
import Create_activos from "./component/create_activos/create_activos";
import Activos from "./component/activos/activos";

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
    path: "/dashboard",
    element: <Dashboard />,
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
    path: "/restablecerPassword",
    element: <RestablecerPassword />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
