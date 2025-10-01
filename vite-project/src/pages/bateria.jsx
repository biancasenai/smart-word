// Bateria.jsx
import React, { useState, useEffect } from "react";

export default function Bateria() {
  const [battery, setBattery] = useState({ percent: 80, charging: true, rangeKm: 250 });

  useEffect(() => {
    const id = setInterval(() => {
      // Simulação de atualização do nível da bateria
      setBattery(prev => {
        let next = prev.percent - Math.random() * 3;
        if (next < 0) next = 100; // recarrega automaticamente
        return { ...prev, percent: Math.round(next) };
      });
    }, 3000);

    return () => clearInterval(id);
  }, []);

  const clamped = Math.max(0, Math.min(100, battery.percent));
  const color =
    clamped > 60 ? "#2a9d8f" :
    clamped > 30 ? "#f4a261" : "#e76f51";

  return (
    <div style={styles.page}>
     
      
      <div style={{ ...styles.shell, borderColor: color }}>
        <div style={{ ...styles.level, width: `${clamped}%`, backgroundColor: color }} />
        <div style={styles.tip}></div>
      </div>

      <div style={styles.info}>
        <span style={styles.percent}>{clamped}%</span>
        {battery.charging && <span style={styles.charging}>⚡ Carregando</span>}
        <span style={styles.range}>Autonomia: {battery.rangeKm} km</span>
      </div>
    </div>
  );
}

const styles = {
  page: { display:"flex", flexDirection:"column", alignItems:"center", gap:"30px", marginTop:"60px", fontFamily:"Arial, sans-serif" },
  title: { fontSize:"42px", fontWeight:"bold" },
  shell: { width:"750px", height:"400px", border:"6px solid #333", borderRadius:"10px", position:"relative", overflow:"hidden" },
  level: { height:"100%", transition:"width .4s ease" },
  tip: { position:"absolute", top:"30px", right:"-18px", width:"18px", height:"40px", background:"#333", borderRadius:"3px" },
  info: { display:"flex", flexDirection:"column", alignItems:"center", gap:"12px" },
  percent: { fontSize:"36px", fontWeight:"700" },
  charging: { color:"#f2c94c", fontWeight:"700", fontSize:"28px" },
  range: { fontSize:"26px", color:"#333", fontWeight:"500" }
};
