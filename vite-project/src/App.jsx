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
    <div className={`app${darkMode ? "dark" : ""}`}>
      {isLoggedIn ? (
        <>
          {/* A BARRA SÓ APARECE QUANDO ESTÁ LOGADO */}
          <header
            className={`header-bar ${darkMode ? "dark" : "light"}`}
            style={{
              display: "flex",
              justifyContent: "space-between", // Espaça os itens (logo e botões)
              alignItems: "center", // Centraliza os itens verticalmente
              padding: "10px 20px",
              backgroundColor: darkMode ? "#0D1164" : "#0E6BA8", // Azul escuro no modo light
              color: darkMode ? "#fff" : "#fff",
            }}
          >
            {/* Logo à esquerda */}
            <div
              className="logo-container"
              onClick={() => navigate("/")}
              role="button"
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="header-logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
              <h1
                style={{ fontSize: "18px", color: darkMode ? "#fff" : "#000" }}
              >
                SMART
                <br />
                WORD
              </h1>
            </div>

            {/* Botões à direita */}
            <div
              style={{
                display: "flex",
                gap: "10px", // Espaçamento entre os botões
              }}
            >
              {/* Botão de alternância de tema */}
              <button
                onClick={toggleTheme}
                style={{
                  borderRadius: "20px",
                  fontFamily: "Kodchasan",
                  backgroundColor: darkMode ? "#fff" : "#00072D",
                  color: darkMode ? "#00072D" : "#fff",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>

              {/* Botão Chatbot */}
              <button
                className="chatbot-button"
                onClick={() => navigate("/chatbot")}
                aria-label="Ir para Chatbot"
                style={{
                  borderRadius: "11%",
                  fontFamily: "Kodchasan",
                  backgroundColor: "#00B4D8",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Chatbot
              </button>
            </div>
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
