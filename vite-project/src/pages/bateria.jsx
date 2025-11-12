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
  // Este estilo é aplicado ao 'bateria-page' para cobrir a tela inteira.
  const estiloDeFundo = {
    minHeight: "100vh", // Use minHeight para garantir que cubra a tela
    margin: 0,
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    // Gradiente de fundo condicional
    background: darkMode ? "linear-gradient(to bottom, #00072D)" : "linear-gradient(to bottom, #00B4D8)",
    color: temaCorTexto,
    fontSize: "18px",
    fontFamily: "Kodchasan, Arial, sans-serif",
    padding: '20px', // Adicionar um padding para respiro, se necessário
  };

  // Estilo do Bateria-Shell (Borda e Estrutura)
  const estiloShell = { 
    // Cor da borda
    borderColor: darkMode ? "#9D52E4" : temaCorPrimaria, 
    // Opacidade de 60% no fundo do shell
    background: darkMode ? "rgba(0, 0, 0, 0.6)" : "#00B4D8",
  };

  // Estilo do Nível da Bateria (Cor do preenchimento)
  const color = darkMode
    ? `linear-gradient(to right, ${temaCorPrimaria}, ${temaCorSecundaria})` 
    : `linear-gradient(to right, ${temaCorPrimaria}, ${temaCorSecundaria})`;
    
  // Estilo para o span de carregamento
  const estiloCarregando = {
      color: temaCorPrimaria, // Cor primária do tema para o texto "Carregando"
  };

  return (
    // Estrutura ORIGINAL do componente restaurada, com o estilo de fundo aplicado
    <div className="bateria-page" style={estiloDeFundo}>
      <div className="bateria-shell" style={estiloShell}>
        <div
          className="bateria-level"
          style={{ width: `${clamped}%`, background: color }}
        />
        {/* A ponta da bateria (bateria-tip) precisa da cor da borda do shell */}
        <div className="bateria-tip" style={{ borderColor: estiloShell.borderColor }}></div>
      </div>

      <div className="bateria-info">
        <span className="bateria-percent">{clamped}%</span>
        {battery.charging && (
          // Aplica o estilo de cor para o texto Carregando
          <span className="bateria-charging" style={estiloCarregando}>⚡ Carregando</span>
        )}
        <span className="bateria-range">Autonomia: {battery.rangeKm} km</span>
      </div>
    </div>
  );
}