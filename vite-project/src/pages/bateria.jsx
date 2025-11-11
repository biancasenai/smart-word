import React, { useState, useEffect } from "react";

export default function Bateria() {
  const [battery, setBattery] = useState({ percent: 0, charging: false, rangeKm: 0 });
  const API_URL = "https://localhost:7264/api/Bateria/status";

  useEffect(() => {
    // Função para buscar dados da API
    const fetchBattery = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erro ao buscar dados da bateria");
        const data = await response.json();
        setBattery({
          percent: data.percent,
          charging: data.charging,
          rangeKm: data.rangeKm,
        });
      } catch (error) {
        console.error(error);
      }
    };

    // Buscar dados inicialmente e depois a cada 3 segundos
    fetchBattery();
    const id = setInterval(fetchBattery, 3000);

    return () => clearInterval(id);
  }, []);

  const clamped = Math.max(0, Math.min(100, battery.percent));

  const color =
    clamped > 60
      ? "linear-gradient(to right, #901BFE, #B670F8)"   // alto
      : clamped > 30
      ? "linear-gradient(to right, #8B41D0, #D2A2FF)"   // médio
      : "linear-gradient(to right, #901BFE, #B670F8)";  // baixo

  return (
    <div className="bateria-page">
      <div className="bateria-shell" style={{ borderColor: "#9D52E4" }}>
        <div className="bateria-level" style={{ width: `${clamped}%`, background: color }} />
        <div className="bateria-tip"></div>
      </div>

      <div className="bateria-info">
        <span className="bateria-percent">{clamped}%</span>
        {battery.charging && <span className="bateria-charging">⚡ Carregando</span>}
        <span className="bateria-range">Autonomia: {battery.rangeKm} km</span>
      </div>
    </div>
  );
}
