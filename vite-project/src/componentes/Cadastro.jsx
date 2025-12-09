import React, { useState } from "react";

// Imagens para tema claro
import logoLight from "../img/ligthSW.png";
import userLight from "../img/usuarioligth.png";

// Imagens para tema escuro
import logoDark from "../img/SmartWord.png";
import userDark from "../img/usuario.png";

const Cadastro = ({ onCadastro, goToLogin }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [placa, setPlaca] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  // ---------- API IMPLEMENTADA (POST) ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      cpf: cpf,
      senha: senha,
      placa: placa,
    };

    try {
      const response = await fetch("https://localhost:7150/api/Carros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }

      alert("Cadastro realizado com sucesso!");

      if (onCadastro) onCadastro();
    } catch (error) {
      alert("Falha ao enviar os dados para a API.");
      console.error(error);
    }
  };
  // ---------------------------------------------------

  const logoImg = darkMode ? logoDark : logoLight;
  const userImg = darkMode ? userDark : userLight;

  return (
    <div
      className={`cadastro-root ${darkMode ? "dark" : "light"}`}
      style={{
        height: "100vh",
        display: "flex",
        position: "relative",
        transition: "0.3s",
      }}
    >
      <style>{`
        .cadastro-root.dark {
          background-color: #00072D;
          color: white;
          justify-content: space-evenly;
          align-items: center;
        }
        .cadastro-root.light {
          background-color: #00B4D8;
          color: black;
          justify-content: space-evenly;
          align-items: center;
        }

        .theme-toggle {
          position: absolute;
          top: 20px;
          right: 50px;
          padding: 10px 20px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          font-family: Kodchasan, sans-serif;
          font-weight: bold;
          transition: 0.3s;
        }

        .left-panel {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          height: 100vh;
          margin: 0;
          padding: 0;
        }
        .left-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .right-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .right-panel img {
          width: 200px;
          height: 200px;
          margin-bottom: 10px;
        }

        .titulo {
          font-size: 50px;
          font-family: Kodchasan, sans-serif;
        }
        .subtitulo {
          font-size: 25px;
          font-family: Kodchasan, sans-serif;
        }

        form {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        .inputField {
          padding: 20px;
          width: 650px;
          border-radius: 90px;
          border: 4px solid #151B8B;
          outline: none;
          text-align: center;
          font-size: 14px;
          font-family: Kodchasan, sans-serif;
          transition: 0.15s;
          box-sizing: border-box;
        }

        .cadastro-root.dark .inputField {
          background: transparent;
          color: white;
        }
        .cadastro-root.dark .inputField::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .cadastro-root.light .inputField {
          background: white;
          color: black;
          border: 4px solid #ccc;
        }
        .cadastro-root.light .inputField::placeholder {
          color: #666;
        }

        .submitButton {
          padding: 20px;
          width: 350px;
          border-radius: 90px;
          outline: none;
          background: #0E6BA8;
          color: white;
          text-align: center;
          font-size: 20px;
          font-family: Kodchasan, sans-serif;
          border: none;
          cursor: pointer;
        }

        .loginButton {
          margin-top: 20px;
          background: none;
          border: none;
          font-size: 16px;
          font-family: Kodchasan, sans-serif;
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 900px) {
          .inputField { width: 90%; }
          .submitButton { width: 70%; }
        }
      `}</style>

      <button
        onClick={toggleTheme}
        className="theme-toggle"
        style={{
          backgroundColor: darkMode ? "#fff" : "#00072D",
          color: darkMode ? "#00072D" : "#fff",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="left-panel">
        <img src={logoImg} alt="Smart Word" />
      </div>

      <div className="right-panel">
        <img src={userImg} alt="Ícone de Cadastro" />

        <h2 className="titulo">Bem-vindo!</h2>
        <h3 className="subtitulo">Faça seu cadastro:</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="inputField"
            type="text"
            placeholder="CPF"
            maxLength="11"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <input
            className="inputField"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <input
            className="inputField"
            type="text"
            placeholder="Placa do carro"
            maxLength="7"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />

          <button type="submit" className="submitButton">
            CADASTRAR
          </button>
        </form>

        <button onClick={goToLogin} className="loginButton">
          Já tenho conta
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
