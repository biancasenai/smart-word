import React, { useState, useEffect } from "react";

export default function Bateria() {
  const [battery, setBattery] = useState({ percent: 80, charging: true, rangeKm: 250 });

  useEffect(() => {
    const id = setInterval(() => {
      setBattery(prev => {
        let next = prev.percent - Math.random() * 3;
        if (next < 0) next = 100;
        return { ...prev, percent: Math.round(next) };
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const clamped = Math.max(0, Math.min(100, battery.percent));

  // Definindo gradiente linear conforme o nível da bateria
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
        {battery.charging && <span className="bateria-charging"></span>}
        <span className="bateria-range">Autonomia: {battery.rangeKm} km</span>
      </div>
    </div>
  );
}


