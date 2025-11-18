import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Eu posso ajudar com informações sobre seu carro elétrico." }
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
    <div className="chatbot-container">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="buttons">
          {!showSubOptions && (
            <>
              <button onClick={() => handleClick("Onde posso recarregar agora?")}>
                Onde posso recarregar agora?
              </button>
              <button onClick={() => handleClick("Quanto tempo até minha autonomia acabar?")}>
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
