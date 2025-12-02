import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Como posso ajudar você hoje?" },
  ]);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const handleClick = (userMessage) => {
    setMessages(prev => [...prev, { from: "user", text: userMessage }]);

    if (userMessage === "Quais pontos de recarga existem?") {
      setShowSubOptions(true);
    } else {
      setShowSubOptions(false);
    }

    // Respostas locais (sem API)
    let botResponse = "";

    switch (userMessage) {
      case "Onde posso recarregar agora?":
        botResponse = "Você pode recarregar em mercados, shoppings e estacionamentos próximos.";
        break;

      case "Quanto tempo até minha autonomia acabar?":
        botResponse = "Sua autonomia estimada é de 40 km restantes.";
        break;

      case "Quais pontos de recarga existem?":
        botResponse = "Escolha uma das categorias de pontos.";
        break;

      case "Mercados":
        botResponse = "Mercado Central e SuperNova possuem carregadores disponíveis.";
        break;

      case "Hotéis":
        botResponse = "Hotel BlueSun e Comfort Inn possuem carregamento para hóspedes.";
        break;

      default:
        botResponse = "Não entendi. Escolha uma opção abaixo.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: botResponse }]);
    }, 400);
  };

  return (
    <div
      className="chatbot-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
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
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="messages"
          style={{
            width: "100%",
            maxHeight: "300px",
            overflowY: "auto",
            marginBottom: "10px",
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
              <button onClick={() => handleClick("Onde posso recarregar agora?")}>
                Onde posso recarregar agora?
              </button>
              <button
                onClick={() =>
                  handleClick("Quanto tempo até minha autonomia acabar?")
                }
              >
                Autonomia restante
              </button>
              <button onClick={() => handleClick("Quais pontos de recarga existem?")}>
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
  backgroundColor: "#0077B6",
  color: "white",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "background-color 0.3s",
};

quickReplyButtonStyle["&:hover"] = {
  backgroundColor: "#005f8a",
};