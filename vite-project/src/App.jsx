import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de importar corretamente
import { UseTheme } from "./componentes/ThemeContext"; // Importa o contexto do tema
import logoDark from "./assets/logo-dark.png"; // Substitua pelo caminho correto
import logoLight from "./assets/logo-light.png"; // Substitua pelo caminho correto
import Home from "./pages/home"; // Substitua pelo caminho correto
import Login from "./pages/login"; // Substitua pelo caminho correto
import Cadastro from "./pages/cadastro"; // Substitua pelo caminho correto

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

      <main>
        {isLoggedIn ? (
          <Home />
        ) : showLogin ? (
          <Login onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <Cadastro onCadastro={() => setShowLogin(true)} />
        )}
      </main>
    </div>
  );
}

export default App;
