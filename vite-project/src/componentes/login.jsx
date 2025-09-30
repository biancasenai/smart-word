import React from "react";
import App from "../App.jsx";
import logo from "../img/logo.png"; // Ajuste o caminho conforme a localização do arquivo da logo

const Login = () => {
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
      {/* ONDAS COLORIDAS */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "1 00%" }}>
        {/* Onda azul */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            fill="#640D5F"
            d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,117.3C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
 
        {/* Onda rosa por cima */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            fill="#EA2264"
            fillOpacity="0.7"
            d="M0,64L60,96C120,128,240,192,360,197.3C480,203,600,149,720,117.3C840,85,960,75,1080,74.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* HEADER COM LOGO */}
      <div
        style={{
          position: "relative",
          marginTop: "160px", // empurra abaixo das ondas
          padding: "40px 40px 40px",
          background: "#0D1164",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={logo} // Logo importada
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
          BEM-VINDO!
        </h2>
      </div>

      {/* FORMULÁRIO */}
      <form
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="CPF"
          style={inputStyle}
          maxLength="11"
        />
        <input
          type="password"
          placeholder="SENHA DO USUÁRIO"
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="PLACA DO CARRO"
          style={inputStyle}
          maxLength="7"
        />

        <button type="submit" style={buttonStyle}>
          ENTRAR
        </button>
      </form>
    </div>
  );
};

// estilos dos inputs
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

// estilo do botão
const buttonStyle = {
  marginTop: "15px",
  padding: "12px",
  border: "none",
  borderRadius: "20px",
  background: "linear-gradient(to right, #FF76A1, #F37E7E)",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};

export default Login;
