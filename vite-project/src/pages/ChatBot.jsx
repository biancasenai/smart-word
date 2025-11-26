import React, { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Eu posso ajudar com informações sobre seu carro elétrico." }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [showSubOptions, setShowSubOptions] = useState(false);

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

  const handleSendInput = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { from: "user", text: inputMessage };
    setMessages((prev) => [...prev, userMessage]);

    // Resposta simulada do bot
    let botResponse = "";
    if (inputMessage.toLowerCase().includes("mercado")) {
      botResponse = lugaresProximos.Mercados.join(", ");
    } else if (inputMessage.toLowerCase().includes("restaurante")) {
      botResponse = lugaresProximos.Restaurantes.join(", ");
    } else if (inputMessage.toLowerCase().includes("hotel")) {
      botResponse = lugaresProximos.Hoteis.join(", ");
    } else if (inputMessage.toLowerCase().includes("recarga")) {
      botResponse = lugaresProximos.Recarga.join(", ");
    } else {
      botResponse = "Desculpe, não entendi. Pergunte sobre mercados, restaurantes, hotéis ou recarga.";
    }

    setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    setInputMessage("");
  };

  return (
    <div
      style={{
        background: darkMode ? "#151B8B" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
        position: "relative"
      }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 20px",
          borderRadius: "20px",
          border: "none",
          background: darkMode ? "#0E6BA8" : "#ccc",
          color: darkMode ? "white" : "black",
          cursor: "pointer"
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div style={{ marginBottom: "20px" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            textAlign: msg.from === "bot" ? "left" : "right",
            margin: "10px 0"
          }}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
          placeholder="Digite sua mensagem..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none",
            background: darkMode ? "#0E6BA8" : "#fff",
            color: darkMode ? "white" : "black"
          }}
        />
        <button
          onClick={handleSendInput}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: darkMode ? "#1E90FF" : "#00B4D8",
            color: "white",
            cursor: "pointer"
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
