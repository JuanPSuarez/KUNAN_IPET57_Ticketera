import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import Card from "./props/card";
import { Chart } from "chart.js/auto";
import Dashboard from "../dashboard-left/dash";

function DashboardMenu() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create_activos");
  };

  const chartRef = useRef(null);
  let pieChart = null;

  useEffect(() => {
    const pieData = {
      borderWidth: [""],
      labels: ["Rojo", "Verde", "Azul"],
      datasets: [
        {
          data: [30, 40, 20],
          backgroundColor: ["red", "green", "blue"],
        },
      ],
    };

    const pieOptions = {
      responsive: true,
    };

    const ctx = chartRef.current?.getContext("2d");

    if (pieChart) {
      pieChart.destroy();
    }

    if (ctx) {
      pieChart = new Chart(ctx, {
        type: "pie",
        data: pieData,
        options: pieOptions,
      });
    }
  }, []);

  return (
    <div className="col-lg-12  fondo">
      <Dashboard />
      <div className="col-lg-12 mb-3 fondo">
        <img
          className="imglogo"
          src="/public/Logo Kunan Vertical 1.png"
          alt=""
        />
      </div>
      <span>Revisa y gestiona tu inventario de Activos tecnológicos</span>
      <div className="col-lg-12 mt-4">
        <button className="btn  btn-primary mb-3" onClick={handleClick}>
          Nuevo Activo
        </button>
      </div>

      <div className="row mt-6 d-flex justify-content-center align-items-center">
        <Card titulo="Asignadas" subTitulo="Maquinas Asignadas" />
        <Card titulo="Disponibles" subTitulo="Maquinas en Inventario" />
        <Card titulo="Total de Equipos" subTitulo="i5"></Card>
        <canvas
          ref={chartRef}
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        ></canvas>
      </div>
    </div>
  );
}
export default DashboardMenu;
