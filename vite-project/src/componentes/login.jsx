import React, { useState } from "react";

// Imagens para tema claro
import logoLight from "../img/ligthSW.png";
import userLight from "../img/usuarioligth.png";

// Imagens para tema escuro
import logoDark from "../img/SmartWord.png"; // substitua com a imagem correta se já tiver
import userDark from "../img/usuario.png"; // substitua com a imagem correta se já tiver

const Login = ({ onLogin, goToCadastro }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [placa, setPlaca] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userFound = users.find(
      (user) => user.cpf === cpf && user.senha === senha && user.placa === placa
    );
    if (userFound) {
      setError("");
      onLogin();
    } else {
      setError("❌ Login não encontrado. Verifique seus dados.");
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  // Escolha da imagem baseada no tema
  const logoImg = darkMode ? logoDark : logoLight;
  const userImg = darkMode ? userDark : userLight;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#00072D" : "#00B4D8",
        color: darkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "relative",
        transition: "0.3s",
      }}
    >
      {/* Botão de troca de tema */}
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "20px",
          right: "50px",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          backgroundColor: darkMode ? "#fff" : "#00072D",
          color: darkMode ? "#00072D" : "#fff",
          fontFamily: "Kodchasan",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Lado esquerdo - logo */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", height: "100%" }}>
        <img
          src={logoImg}
          alt="Smart Word"
          style={{ width: "100%", height: "auto", maxWidth: "1000px" }}
        />
      </div>

      {/* Lado direito - login */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={userImg}
          alt="Ícone de Login"
          style={{ width: "200px", height: "200px", marginBottom: "10px" }}
        />

        <h2 style={{ fontSize: "50px", fontFamily: "Kodchasan" }}>Bem-vindo!</h2>
        <h3 style={{ fontSize: "25px", fontFamily: "Kodchasan" }}>Faça seu login:</h3>

        <form
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="CPF"
            style={{
              ...inputStyle,
              color: darkMode ? "white" : "black",
              borderColor: darkMode ? "#151B8B" : "#ccc",
            }}
            maxLength="11"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            style={{
              ...inputStyle,
              color: darkMode ? "white" : "black",
              borderColor: darkMode ? "#151B8B" : "#ccc",
            }}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="text"
            placeholder="Placa do carro"
            style={{
              ...inputStyle,
              color: darkMode ? "white" : "black",
              borderColor: darkMode ? "#151B8B" : "#ccc",
            }}
            maxLength="7"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />

          <button type="submit" style={buttonStyle}>
            ENTRAR
          </button>

          {error && (
            <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>{error}</p>
          )}
        </form>

        <button onClick={goToCadastro} style={buttonLoginStyle}>
          Não tem conta? Cadastre-se
        </button>
      </div>
    </div>
  );
};

// Estilos

const inputStyle = {
  padding: "20px",
  width: "650px",
  borderRadius: "90px",
  border: "4px solid #151B8B",
  outline: "none",
  background: "transparent",
  textAlign: "center",
  fontSize: "14px",
  fontFamily: "Kodchasan",
  transition: "color 0.3s ease, border-color 0.3s ease",
};

const buttonStyle = {
  padding: "20px",
  width: "350px",
  borderRadius: "90px",
  outline: "none",
  background: "#0E6BA8",
  color: "white",
  textAlign: "center",
  fontSize: "20px",
  fontFamily: "Kodchasan",
};

const buttonLoginStyle = {
  marginTop: "20px",
  background: "none",
  border: "none",
  fontSize: "16px",
  fontFamily: "Kodchasan",
  textDecoration: "underline",
  cursor: "pointer",
  padding: 0,
};

export default Login;
