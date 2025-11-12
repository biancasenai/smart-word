import React from "react";
import { useNavigate } from "react-router";
import { UseTheme } from "../componentes/ThemeContext";

function Home() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = UseTheme(); // Usa o contexto para tema

  return (
    <div
      className="home-container"
      style={{
        backgroundColor: darkMode ? "#00072D" : "#00B4D8",
        color: darkMode ? "white" : "black",
        position: "relative",
      }}
    >
      {/* Botão de troca de tema */}
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "30px",
          right: "150px",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          backgroundColor: darkMode ? "#fff" : "#00072D",
          color: darkMode ? "#00072D" : "#fff",
          fontFamily: "Kodchasan",
          fontWeight: "bold",
          transition: "0.3s",
          zIndex: 1000,
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Fundo com onda fixa */}
      <div className="wave-container">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={darkMode ? "#1E90FF" : "#87CEFA"}
            fillOpacity="0.3"
            d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,200.3C840,213,960,203,1080,197.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Esquerda */}
      <div className="left-buttons">
        <button className="theme-button" onClick={() => navigate("/relatorio")}>
          RELATÓRIO
        </button>
        <button
          className="theme-button"
          onClick={() => navigate("/trocar-pontos")}
        >
          TROCA DE PONTOS
        </button>
      </div>

      {/* Direita */}
      <div className="right-buttons">
        <button className="theme-button" onClick={() => navigate("/bateria")}>
          BATERIA
        </button>
        <button className="theme-button" onClick={() => navigate("/navegar")}>
          NAVEGAÇÃO
        </button>
      </div>
    </div>
  );
}

export default Home;