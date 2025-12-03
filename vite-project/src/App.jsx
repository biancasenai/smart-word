import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import Cadastro from "./componentes/Cadastro";
import Login from "./componentes/login";
import Home from "./pages/home";
import Bateria from "./pages/bateria";
import Relatorio from "./pages/Relatório";
import TrocarPontos from "./pages/trocarpontos";
import Navegar from "./pages/navegar";
import "bootstrap/dist/css/bootstrap.min.css";
import PontosMercado from "./pages/pontosMercado";
import PontosManutencao from "./pages/pontosManutencao";
import PontosHoteis from "./pages/pontosHoteis";
import PontosCashback from "./pages/pontosCashback";
import PontosProdutos from "./pages/pontosProdutos";
import logoLight from "./img/logoligth.png";
import logoDark from "./img/logoDark.png";
import ChatBot from "./pages/ChatBot";
import { ThemeProvider, UseTheme } from "./componentes/ThemeContext";

// Botão voltar para todas as páginas
function VoltarHomeButton() {
  return (
    <button className="voltar-home" onClick={() => history.back()}>
      ◀
    </button>
  );
}

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // alterna entre cadastro e login
  const [showCadastro, setShowCadastro] = useState(false); // alterna entre cadastro e login
  const { darkMode, toggleTheme } = UseTheme(); // Usa o contexto do tema

  // Escolhe a imagem conforme o tema
  const logo = darkMode ? logoDark : logoLight;

  return (
    <div
      className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}
      style={{
        backgroundColor: darkMode ? "#00072D" : "#FFFFFF",
        color: darkMode ? "#FFFFFF" : "#000000",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: darkMode ? "#001F3F" : "#F5F5F5",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "40px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            backgroundColor: darkMode ? "#FFFFFF" : "#00072D",
            color: darkMode ? "#00072D" : "#FFFFFF",
            fontWeight: "bold",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

          <VoltarHomeButton />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bateria" element={<Bateria />} />
            <Route path="/relatorio" element={<Relatorio />} />
            <Route path="/navegar" element={<Navegar />} />
            <Route path="/trocar-pontos" element={<TrocarPontos />} />
            <Route path="/pontosMercado" element={<PontosMercado />} />
            <Route path="/pontosManutencao" element={<PontosManutencao />} />
            <Route path="/pontosHoteis" element={<PontosHoteis />} />
            <Route path="/pontosCashback" element={<PontosCashback />} />
            <Route path="/pontosProdutos" element={<PontosProdutos />} />
            <Route
              path="/chatbot"
              element={
                <div className="App">
                  <ChatBot />
                </div>
              }
            />
          </Routes>
        </>
      ) : showCadastro ? (
        <Cadastro
          onCadastro={() => setIsLoggedIn(true)} // depois do cadastro vai pra Home
          goToLogin={goToLogin} // botão "Já tenho login"
        />
      ) : (
        <Login
          onLogin={() => setIsLoggedIn(true)}
          goToCadastro={goToCadastro} // voltar para Cadastro
        />
      )}
    </div>
  );
}

export default App;
