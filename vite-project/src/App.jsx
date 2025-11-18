import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import Cadastro from "./componentes/Cadastro";
import Login from "./componentes/login";
import Home from "./pages/home";
import Bateria from "./pages/bateria";
import Relatorio from "./pages/Relatório";
import TrocarPontos from "./pages/TrocarPontos";
import Navegar from "./pages/navegar";
import "bootstrap/dist/css/bootstrap.min.css";
import PontosMercado from "./pages/PontosMercado";
import PontosManutencao from "./pages/PontosManutencao";
import PontosHoteis from "./pages/PontosHoteis";
import PontosCashback from "./pages/PontosCashback";
import PontosProdutos from "./pages/PontosProdutos";
import logoLight from "./img/logoligth.png";
import logoDark from "./img/logoDark.png";
import Chat from "./pages/ChatBot";
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
  const [showCadastro, setShowCadastro] = useState(false);
  const { darkMode } = UseTheme();

  // Escolhe a imagem conforme o tema
  const logo = darkMode ? logoDark : logoLight;

  const goToCadastro = () => setShowCadastro(true);
  const goToLogin = () => setShowCadastro(false);

  return (
    <div className={`app${darkMode ? "dark" : ""}`}>
      {isLoggedIn ? (
        <>
          {/* A BARRA SÓ APARECE QUANDO ESTÁ LOGADO' */}
          <header className={`header-bar ${darkMode ? "dark" : "light"}`}>
            <div
              className="logo-container"
              onClick={() => navigate("/")}
              role="button"
            >
              <img src={logo} alt="Logo" className="header-logo" />
              <h1>
                SMART
                <br />
                WORD
              </h1>
            </div>

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
                  <Chat />
                </div>
              }
            />
          </Routes>
         
        </>
      ) : showCadastro ? (
        <Cadastro
          onCadastro={() => setShowLogin(true)} // depois do cadastro vai pro login
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
