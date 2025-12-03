import React, { useState } from "react";
// Importar o hook UseTheme para acessar o tema
import { UseTheme } from "../componentes/ThemeContext";

export default function Bateria() {
  // Obter o estado do tema (darkMode)
  const { darkMode } = UseTheme();

  const [battery, setBattery] = useState({
    percent: 75,
    charging: false,
    rangeKm: 320,
  });

  const clamped = Math.max(0, Math.min(100, battery.percent));

  // --- CORES TEMÁTICAS UNIFICADAS ---
  const temaCorPrimaria = darkMode ? "#901BFE" : "#0C91AA"; // Cor principal
  const temaCorSecundaria = darkMode ? "#B670F8" : "#0C91AA"; // Cor secundária/clara
  const temaCorTexto = darkMode ? "#fff" : "#222"; // Cor do texto

  // 1. ESTILO: Fundo de toda a tela, igual ao do Relatorio.
  const estiloDeFundo = {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: darkMode
      ? "linear-gradient(to bottom, #00072D)"
      : "linear-gradient(to bottom, #00B4D8)",
    color: temaCorTexto,
    fontSize: "18px",
    fontFamily: "Kodchasan, Arial, sans-serif",
    padding: "20px",
  };

  // Estilo do Bateria-Shell (Borda e Estrutura)
  const estiloShell = {
    borderColor: darkMode ? "#9D52E4" : temaCorPrimaria,
    background: darkMode ? "rgba(0, 0, 0, 0.6)" : "#00B4D8",
  };

  // Estilo do Nível da Bateria (Cor do preenchimento)
  const color = darkMode
    ? `linear-gradient(to right, ${temaCorPrimaria}, ${temaCorSecundaria})`
    : `linear-gradient(to right, ${temaCorPrimaria}, ${temaCorSecundaria})`;

  // Estilo para o span de carregamento
  const estiloCarregando = {
    color: temaCorPrimaria,
  };

  return (
    <div className="bateria-page" style={estiloDeFundo}>
      <div className="bateria-shell" style={estiloShell}>
        <div
          className="bateria-level"
          style={{ width: `${clamped}%`, background: color }}
        />
        <div
          className="bateria-tip"
          style={{ borderColor: estiloShell.borderColor }}
        ></div>
      </div>

      <div className="bateria-info">
        <span className="bateria-percent">{clamped}%</span>
        {battery.charging && (
          <span className="bateria-charging" style={estiloCarregando}>
            ⚡ Carregando
          </span>
        )}
        <span className="bateria-range">Autonomia: {battery.rangeKm} km</span>
      </div>
    </div>
  );
}