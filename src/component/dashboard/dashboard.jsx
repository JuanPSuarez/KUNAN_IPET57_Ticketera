import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import Card from "./props/card";
import { Chart } from "chart.js/auto";

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create_activos");
  };

  const chartRef = useRef(null);
  let pieChart = null;

  useEffect(() => {
    // Datos para el gráfico de pastel
    const pieData = {
      borderWidth: [""],
      labels: ["Rojo", "Verde", "Azul"],
      datasets: [{
        data: [30, 40, 20],
        backgroundColor: ["red", "green", "blue"]
        
      }]
    };
    
    // Configuración del gráfico de pastel
    const pieOptions = {
      responsive: true
    };

    // Obtén el contexto del lienzo (canvas)
    const ctx = chartRef.current?.getContext("2d");

    // Destruye el gráfico anterior si existe
    if (pieChart) {
      pieChart.destroy();
    }

    // Crea el gráfico de pastel
    if (ctx) {
      pieChart = new Chart(ctx, {
        type: "pie",
        data: pieData,
        options: pieOptions
      });
    }
  }, []);


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
      <div className="col-lg-12 mt-2">
        <button className="btn  btn-primary " onChange={handleClick}>
          Actualizar
        </button>
      </div>
      
      <div className="row mt-3">
        <Card titulo="Asignadas" subTitulo="Maquinas Asignadas" />
        <Card titulo="Disponibles" subTitulo="Maquinas en Inventario" />
        <Card titulo="Total de Equipos" subTitulo="i5" ></Card>
        <canvas ref={chartRef} style={{ maxWidth: '200px', maxHeight: '200px' }}></canvas>
      </div>
    </div>
  );
}
export default Dashboard;
