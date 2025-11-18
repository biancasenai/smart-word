import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Eu posso ajudar com informações sobre seu carro elétrico." }
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
