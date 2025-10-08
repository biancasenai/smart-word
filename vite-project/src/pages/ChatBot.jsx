import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Eu posso ajudar com informações sobre seu carro elétrico." }
  ]);
  const [showSubOptions, setShowSubOptions] = useState(false);

  const handleClick = (userMessage) => {
    setMessages(prev => [...prev, { from: "user", text: userMessage }]);

    let botResponse = "";

    if (userMessage === "Onde posso recarregar agora?") {
      botResponse = "Você pode recarregar nos pontos mais próximos. Veja no mapa abaixo.";
      setShowSubOptions(false);
    } else if (userMessage === "Quanto tempo até minha autonomia acabar?") {
      botResponse = "Sua autonomia atual é de aproximadamente 200 km, o que dá cerca de 3 horas de uso.";
      setShowSubOptions(false);
    } else if (userMessage === "Quais pontos de recarga existem?") {
      botResponse = "Você quer recarregar em Mercados ou Hotéis próximos?";
      setShowSubOptions(true);
    } else if (userMessage === "Mercados") {
      botResponse = "Pontos de recarga em Mercados próximos: Mercado A, Mercado B, Mercado C.";
      setShowSubOptions(false);
    } else if (userMessage === "Hotéis") {
      botResponse = "Pontos de recarga em Hotéis próximos: Hotel X, Hotel Y, Hotel Z.";
      setShowSubOptions(false);
    } else {
      botResponse = "Desculpe, não entendi. Por favor, escolha uma opção abaixo.";
      setShowSubOptions(false);
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: botResponse }]);
    }, 500);
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
