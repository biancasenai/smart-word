import React, { useState } from "react";
import logoEsquerda from "../img/SmartWord.png"; // imagem à esquerda
import minhaImagem from "../img/usuario.png"; // ajuste o nome e caminho conforme necessário
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
    onCadastro();
  };

  return (
    <div
      style={{
        backgroundColor: "#00072D",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {/* Imagem no lado esquerdo */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center",height:"100%", }}>
        <img
          src={logoEsquerda}
          alt="Smart Word"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "1000px",
          }}
        />
      </div>

      {/* Lado direito - Formulário e nova imagem */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Nova imagem acima da escrita */}
        <img
          src={minhaImagem}
          alt="Ícone de Cadastro"
          style={{
            width: "200px",
            height: "200px",
            marginBottom: "10px",
          }}
        />

        <h2 style={{ fontSize:"50px", color: "#fff", fontFamily:"Kodchasan", }}>Bem-vindo!</h2>
        <h3 style={{ fontSize: "25px", color: "#fff",fontFamily:"Kodchasan", }}>Faça seu cadastro:</h3>

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

        <button onClick={goToLogin} style={buttonLoginStyle}>
          Já tenho conta
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "20px",
  width: "650px",
  borderRadius: "90px",
  border: "4px solid #151B8B",
  outline: "none",
  background: "transparent",
  color: "white",
  textAlign: "center",
  fontSize: "14px",
  fontFamily: "Kodchasan",
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
  color: "white",
  fontSize: "16px",
  fontFamily: "Kodchasan",
  textDecoration: "underline",
  cursor: "pointer",
  padding: 0,
};


export default Cadastro;
