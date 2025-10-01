import React, { useState } from "react";
import logo from "../img/logo.png";

const Login = ({ onLogin }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [placa, setPlaca] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pega todos os usuários salvos
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Procura usuário correspondente
    const userFound = users.find(
      (user) => user.cpf === cpf && user.senha === senha && user.placa === placa
    );

    if (userFound) {
      setError("");
      onLogin(); // entra no site
    } else {
      setError("❌ Login não encontrado. Verifique seus dados.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0D1164",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Card com logo */}
      <div
        style={{
          position: "relative",
          marginTop: "160px",
          padding: "40px",
          background: "#0D1164",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "173px",
            height: "153px",
            borderRadius: "50%",
            background: "#7A5AC5",
            padding: "10px",
            border: "3px solid #151B8B",
          }}
        />
        <h2 style={{ marginTop: "10px", fontWeight: "500", color: "#fff" }}>
          LOGIN
        </h2>
      </div>

      {/* Formulário */}
      <form
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="CPF"
          style={inputStyle}
          maxLength="11"
          value={cpf}
          
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha do usuário"
          style={inputStyle}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="text"
          placeholder="Placa do carro"
          style={inputStyle}
          maxLength="7"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          ENTRAR
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

const inputStyle = {
  padding: "20px",
  width: "700px",
  borderRadius: "90px",
  border: "4px solid #151B8B",
  outline: "none",
  background: "transparent",
  color: "white",
  textAlign: "center",
  fontSize: "14px",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "12px",
  border: "none",
  borderRadius: "20px",
  background: "linear-gradient(to right, #FF76A1, #F37E7E)", // rosa/vermelho
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};

export default Login;
