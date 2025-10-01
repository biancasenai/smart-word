import React, { useState } from "react";
import logo from "../img/logo.png";

const Cadastro = ({ onCadastro, goToLogin }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [placa, setPlaca] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { cpf, senha, placa };

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("✅ Cadastro realizado com sucesso!");
    onCadastro(); // vai para login
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
          CADASTRO
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
          placeholder="Senha"
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
          CADASTRAR
        </button>
      </form>

      {/* Botão de ir para Login */}
      <button onClick={goToLogin} style={buttonLoginStyle}>
        Já tenho login
      </button>
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
  background: "linear-gradient(to right, #76E7FF, #3A9BE7)", // azul
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};

const buttonLoginStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  border: "none",
  borderRadius: "15px",
  background: "linear-gradient(to right, #FF76A1, #F37E7E)", // rosa/vermelho
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};

export default Cadastro;
