import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from "./componentes/login";
import Home from "./pages/home";
import Bateria from "./pages/bateria";
import Relatorio from "./pages/Relatório";
import TrocarPontos from "./pages/TrocarPontos";
import 'bootstrap/dist/css/bootstrap.min.css';


// Botão que será usado em todas as páginas
function VoltarHomeButton() {
  const navigate = useNavigate();
  return (
    <button 
  className="voltar-home" 
  onClick={() => navigate('/')}
>
  ◀
</button>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={`app${dark ? ' dark' : ''}`}>
      <header className="header-bar">
        <h1>
          smart<br />
          word
        </h1>
        <button
          className={`theme-toggle${dark ? ' active' : ''}`}
          onClick={() => setDark((v) => !v)}
          aria-label="Alternar tema"
        >
          <span className="toggle-track">
            <span className="toggle-ball" />
          </span>
        </button>
      </header>

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
