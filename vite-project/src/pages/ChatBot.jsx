import React, { useState } from "react";
import { UseTheme } from "../componentes/ThemeContext"; // Importa o contexto de tema

export default function Chatbot() {
  const { darkMode, toggleTheme } = UseTheme(); // Usa o contexto para obter o estado do tema e a função de troca

  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Como posso ajudar você hoje?" },
  ]);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const handleClick = (userMessage) => {
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);

    if (userMessage === "Quais pontos de recarga existem?") {
      setShowSubOptions(true);
    } else {
      setShowSubOptions(false);
    }

    // Respostas locais (sem API)
    let botResponse = "";

    switch (userMessage) {
      case "Onde posso recarregar agora?":
        botResponse =
          "Você pode recarregar em mercados, shoppings e estacionamentos próximos.";
        break;

      case "Quanto tempo até minha autonomia acabar?":
        botResponse = "Sua autonomia estimada é de 40 km restantes.";
        break;

      case "Quais pontos de recarga existem?":
        botResponse = "Escolha uma das categorias de pontos.";
        break;

      case "Mercados":
        botResponse =
          "Mercado Central e SuperNova possuem carregadores disponíveis.";
        break;

      case "Hotéis":
        botResponse =
          "Hotel BlueSun e Comfort Inn possuem carregamento para hóspedes.";
        break;

      default:
        botResponse = "Não entendi. Escolha uma opção abaixo.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    }, 400);
  };

  // Cores baseadas no tema
  const colorPageBg = darkMode ? "#00072D" : "#f5f5f5";
  const colorPrimaryText = darkMode ? "#fff" : "#000";
  const colorHighlight = darkMode ? "#00B4D8" : "#E0E0E0";
  const colorHighlightText = darkMode ? "#00072D" : "#000";

  return (
    <div
      className="chatbot-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: colorPageBg,
        color: colorPrimaryText,
        transition: "0.5s",
      }}
    >
      {/* BOTÃO DE TEMA */}
      <button
        onClick={toggleTheme} // Adiciona a função de troca de tema
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 20px",
          background: colorHighlight,
          color: colorHighlightText,
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: darkMode ? `0 0 10px ${colorHighlight}` : "none",
        }}
      >
        {darkMode ? "Modo Light" : "Modo Dark"}
      </button>

      <div
        className="chat-window"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "500px",
          padding: "10px",
          backgroundColor: darkMode ? "#001E3C" : "#00B4D8",
          borderRadius: "8px",
          boxShadow: darkMode
            ? `0 10px 30px rgba(0,0,0,0.8), 0 0 30px ${colorHighlight}`
            : "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "2px solid black", // Adiciona uma borda preta
        }}
      >
        <div
          className="messages"
          style={{
            width: "100%",
            maxHeight: "300px",
            overflowY: "auto",
            marginBottom: "10px",
            color: colorPrimaryText,
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                textAlign: msg.from === "user" ? "right" : "left",
                margin: "5px 0",
              }}
            >
              <strong>{msg.from === "user" ? "Você" : "Bot"}:</strong>{" "}
              {msg.text.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="buttons">
          {!showSubOptions && (
            <>
              <button
                onClick={() => handleClick("Onde posso recarregar agora?")}
              >
                Onde posso recarregar agora?
              </button>
              <button
                onClick={() =>
                  handleClick("Quanto tempo até minha autonomia acabar?")
                }
              >
                Autonomia restante
              </button>
              <button
                onClick={() => handleClick("Quais pontos de recarga existem?")}
              >
                Pontos de recarga
              </button>
            </>
          )}

          {showSubOptions && (
            <>
              <button onClick={() => handleClick("Mercados")}>Mercados</button>
              <button onClick={() => handleClick("Hotéis")}>Hotéis</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const quickReplyButtonStyle = {
  padding: "10px 15px",
  border: "none",
  backgroundColor: "#00B4D8",
  color: "white",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "background-color 0.3s",
};

quickReplyButtonStyle["&:hover"] = {
  backgroundColor: "#005f8a",
};
