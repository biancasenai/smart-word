import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import Cadastro from "./pages/Cadastro";
import Login from "./componentes/Login";
import Home from "./pages/home";
import Bateria from "./pages/bateria";
import Relatorio from "./pages/Relatório";
import TrocarPontos from "./pages/TrocarPontos";
import Navegar from "./pages/navegar";
import "bootstrap/dist/css/bootstrap.min.css";

// Botão que será usado em todas as páginas
function VoltarHomeButton() {
  const navigate = useNavigate();
  return (
    <button className="voltar-home" onClick={() => navigate("/")}>
      ◀
    </button>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // alterna entre cadastro e login

  return (
    <div className={`app${dark ? " dark" : ""}`}>
      <header className="header-bar">
        <h1>
          smart
          <br />
          word
        </h1>
        <button
          className={`theme-toggle${dark ? " active" : ""}`}
          onClick={() => setDark((v) => !v)}
          aria-label="Alternar tema"
        >
          <span className="toggle-track">
            <span className="toggle-ball" />
          </span>
        </button>
      </header>

      {isLoggedIn ? (
        <>
          <VoltarHomeButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bateria" element={<Bateria />} />
            <Route path="/relatorio" element={<Relatorio />} />
            <Route path="/navegar" element={<Navegar />} />
            <Route path="/trocar-pontos" element={<TrocarPontos />} />
          </Routes>
        </>
      ) : showLogin ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Cadastro
          onCadastro={() => setShowLogin(true)} // depois do cadastro vai pro login
          goToLogin={() => setShowLogin(true)} // botão "Já tenho login"
        />
      )}
      <Router>
        {isLoggedIn ? (
          <>
            <VoltarHomeButton />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bateria" element={<Bateria />} />
              <Route path="/relatorio" element={<Relatorio />} />
              <Route path="/navegar" element={<navegar />} />
              <Route path="/trocar-pontos" element={<TrocarPontos />} />
            </Routes>
          </>
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} />
        )}
      </Router>
  

    </div>
    
  );
}

export default App;
