import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Eu posso ajudar com informações sobre seu carro elétrico." }
  ]);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const API_URL = "http://localhost:7264/api/Chatbot/pergunta"; // use http para evitar problemas de certificado

  const handleClick = async (userMessage) => {
    setMessages(prev => [...prev, { from: "user", text: userMessage }]);

    // Controle local de subopções
    if (userMessage === "Quais pontos de recarga existem?") {
      setShowSubOptions(true);
    } else {
      setShowSubOptions(false);
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta: userMessage })
      });

      if (!response.ok) throw new Error("Erro na API");

      const data = await response.json();
      const botResponse = data.resposta || "Desculpe, não entendi. Por favor, escolha uma opção abaixo.";

      setTimeout(() => {
        setMessages(prev => [...prev, { from: "bot", text: botResponse }]);
      }, 500);

    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setMessages(prev => [...prev, { from: "bot", text: "Erro ao acessar a API. Tente novamente." }]);
      }, 500);
    }
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
              <button onClick={() => handleClick("Onde posso recarregar agora?")}>Onde posso recarregar agora?</button>
              <button onClick={() => handleClick("Quanto tempo até minha autonomia acabar?")}>Autonomia restante</button>
              <button onClick={() => handleClick("Quais pontos de recarga existem?")}>Pontos de recarga</button>
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
