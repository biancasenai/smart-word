import React, { useState } from "react";
import { UseTheme } from "../componentes/ThemeContext"; // Importa o contexto do tema

export default function Chatbot() {
  const { darkMode } = UseTheme(); // Usa o contexto para gerenciar o tema
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
      // Chame sua API aqui (substitua a URL pela sua)
      const response = await fetch(
        "https://localhost:7150/api/ChatbotRequests",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputMessage }),
        }
      );

      if (!response.ok) throw new Error("Erro na resposta da API");

      const data = await response.json();
      // Supondo que a resposta da API tenha um campo 'reply'
      const botResponse = data.reply || "Desculpe, não entendi sua pergunta.";

      setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Erro ao conectar com o servidor." },
      ]);
    }

    setInputMessage("");
  };

  // Cores baseadas no tema
  const colorPageBg = darkMode ? "#00072D" : "#f5f5f5";
  const colorPrimaryText = darkMode ? "#fff" : "#000";
  const colorHighlight = darkMode ? "#00B4D8" : "#E0E0E0";
  const colorHighlightText = darkMode ? "#00072D" : "#000";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#0077B6", // Fundo azul
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
        {/* Cabeçalho do chat */}
        <div
          style={{
            backgroundColor: "#0077B6",
            color: "#ffffff",
            padding: "10px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Chatbot
        </div>

        {/* Área de mensagens */}
        <div
          style={{
            flex: 1,
            padding: "10px",
            overflowY: "auto",
            backgroundColor: "#f9f9f9",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                textAlign: msg.from === "user" ? "right" : "left",
                margin: "10px 0",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: msg.from === "user" ? "#0077B6" : "#e0e0e0",
                  color: msg.from === "user" ? "#ffffff" : "#000000",
                  maxWidth: "70%",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Barra de entrada */}
        <div
          style={{
            display: "flex",
            padding: "10px",
            borderTop: "1px solid #e0e0e0",
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
              flex: 1,
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none",
              marginRight: "10px",
            }}
          />
          <button
            onClick={handleSendInput}
            style={{
              padding: "10px 15px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#0077B6",
              color: "#ffffff",
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