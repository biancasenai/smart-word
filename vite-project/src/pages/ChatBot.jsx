import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Como posso ajudar você hoje?" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendInput = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { from: "user", text: inputMessage };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("https://api.example.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      const botMessage = { from: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage = {
        from: "bot",
        text: "Desculpe, ocorreu um erro ao processar sua mensagem.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    // Limpa o campo de entrada após o envio
    setInputMessage("");
  };

  const handleQuickReply = (message) => {
    const quickReplyMessage = { from: "user", text: message };
    setMessages((prev) => [...prev, quickReplyMessage]);
    handleSendInput(message);
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
              {msg.text}
            </div>
          ))}
        </div>

        {/* Botões de Opções Rápidas */}
        <div
          className="buttons"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px", // Reduz o espaço entre os botões
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={() => handleQuickReply("Mercados")}
            style={quickReplyButtonStyle}
          >
            Mercados
          </button>
          <button
            onClick={() => handleQuickReply("Hotéis")}
            style={quickReplyButtonStyle}
          >
            Hotéis
          </button>
          <button
            onClick={() => handleQuickReply("Restaurantes")}
            style={quickReplyButtonStyle}
          >
            Restaurantes
          </button>
          <button
            onClick={() => handleQuickReply("Ajuda")}
            style={quickReplyButtonStyle}
          >
            Ajuda
          </button>
        </div>

        {/* Barra de Input */}
        <div
          className="input-bar"
          style={{
            display: "flex",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendInput();
              }
            }}
            placeholder="Digite sua mensagem..."
            style={{
              flexGrow: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px 0 0 4px",
              outline: "none",
            }}
          />
          <button
            onClick={handleSendInput}
            style={{
              padding: "10px 15px",
              border: "none",
              backgroundColor: "#00B4D8",
              color: "white",
              borderRadius: "0 4px 4px 0",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
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