import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Como posso ajudar você hoje?" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Simulação de lugares próximos
  const lugaresProximos = {
    Mercados: [
      "Mercado Central - 1.2 km",
      "Supermercado Bom Preço - 2.5 km",
      "Mini Mercado da Esquina - 0.8 km",
    ],
    Restaurantes: [
      "Restaurante Sabor Caseiro - 1.0 km",
      "Pizzaria Bella Itália - 2.0 km",
      "Churrascaria Boi na Brasa - 1.8 km",
    ],
    Hoteis: [
      "Hotel Conforto - 3.0 km",
      "Pousada Sol Nascente - 2.2 km",
      "Resort Paraíso - 5.0 km",
    ],
    Recarga: [
      "Estação de Recarga - Shopping Center - 1.5 km",
      "Ponto de Recarga - Praça Central - 0.9 km",
      "Recarga Rápida - Posto de Combustível - 2.3 km",
    ],
  };

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

 
  };

  const handleQuickReply = (category) => {
    const userMessage = { from: "user", text: `Quero ver ${category}` };
    setMessages((prev) => [...prev, userMessage]);

    // Simula a resposta do bot com os lugares próximos
    const botMessage = {
      from: "bot",
      text: `Aqui estão os ${category.toLowerCase()} mais próximos:\n${lugaresProximos[
        category
      ].join("\n")}`,
    };
    setMessages((prev) => [...prev, botMessage]);
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

        {/* Botões de Opções Rápidas */}
        <div
          className="buttons"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
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
            onClick={() => handleQuickReply("Restaurantes")}
            style={quickReplyButtonStyle}
          >
            Restaurantes
          </button>
          <button
            onClick={() => handleQuickReply("Hoteis")}
            style={quickReplyButtonStyle}
          >
            Hotéis
          </button>
          <button
            onClick={() => handleQuickReply("Recarga")}
            style={quickReplyButtonStyle}
          >
            Recarga
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