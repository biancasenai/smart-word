import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Cadastro from "./pages/Cadastro";
import Login from "./componentes/Login";
import Home from "./pages/home";
import Bateria from "./pages/bateria";
import Relatorio from "./pages/Relatório";
import TrocarPontos from "./pages/TrocarPontos";
import Navegar from "./pages/navegar";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTAR SUAS PÁGINAS DE PONTOS (ajuste os caminhos corretos)
import PontosMercado from "./pages/PontosMercado";
import PontosManutencao from "./pages/PontosManutencao";
import PontosHoteis from "./pages/PontosHoteis";
import PontosCashback from "./pages/PontosCashback";
import PontosProdutos from "./pages/PontosProdutos";

// Botão que será usado em todas as páginas
function VoltarHomeButton() {
  return (
    <button className="voltar-home" onClick={() => history.back()}>
      ◀
    </button>
  );
}

function App() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // alterna entre cadastro e login

  return (
    <Router>
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
              <Route path="/pontosMercado" element={<PontosMercado />} />
              <Route path="/pontosManutencao" element={<PontosManutencao />} />
              <Route path="/pontosHoteis" element={<PontosHoteis />} />
              <Route path="/pontosCashback" element={<PontosCashback />} />
              <Route path="/pontosProdutos" element={<PontosProdutos />} />
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
      </div>
    </Router>
  );
}

export default App;
