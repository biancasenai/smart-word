import React, { useState } from "react";
import { UseTheme } from "../componentes/ThemeContext"; // Importa o contexto de tema

const PontosCashback = () => {
  const { darkMode } = UseTheme(); // Usa o contexto para obter o estado do tema
  const [pontos, setPontos] = useState(1000);
  const [chavePix, setChavePix] = useState("celular"); // Estado para armazenar a chave PIX selecionada

  const handleChange = (event) => {
    setPontos(Number(event.target.value));
  };

  const handlePixChange = (event) => {
    setChavePix(event.target.value); // Atualiza o estado com a opção selecionada
  };

  const pontosOptions = [];
  for (let i = 1000; i <= 4000; i += 500) {
    pontosOptions.push(i);
  }

  const getPlaceholder = () => {
    switch (chavePix) {
      case "celular":
        return "Digite seu número de celular";
      case "cpf":
      case "cnpj":
        return "Digite seu CPF/CNPJ";
      case "email":
        return "Digite seu email";
      case "aleatoria":
        return "Chave aleatória não precisa ser digitada";
      default:
        return "Digite aqui";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#00072D" : "#00B4D8", // Cor de fundo dinâmica (azul claro no modo light)
        color: darkMode ? "#fff" : "#000", // Cor do texto dinâmica
        fontFamily: "Kodchasan",
        padding: "0 50px",
      }}
    >
      {/* Container Principal de Conteúdo (Lado a Lado) */}
      <div
        style={{
          display: "flex",
          // 'justifyContent: "space-between"' para separar os dois lados dentro deste container
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1200px", // Limita a largura máxima do conteúdo
        }}
      >
        {/* Lado esquerdo: Seleção de pontos */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "45%", // Usando porcentagem para responsividade
          }}
        >
          <h2
            style={{
              marginBottom: "40px",
              color: "#fff",
              fontSize: "36px",
              // Usei margin-top para descer o título se necessário
              // Mas removi para centralizar melhor com o lado direito
            }}
          >
            SELECIONE A QUANTIDADE DE PONTOS
          </h2>
          {/* Retângulo de seleção de pontos */}
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "80px",
              backgroundColor: "#fff",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            <select
              value={pontos}
              onChange={handleChange}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                color: "#000",
                border: "none",
                outline: "none",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {pontosOptions.map((ponto) => (
                <option key={ponto} value={ponto}>
                  {ponto} Pontos
                </option>
              ))}
            </select>
          </div>
          <p
            style={{
              marginTop: "30px",
              color: "#fff",
              fontSize: "24px",
            }}
          >
            Você selecionou: **{pontos} pontos**
          </p>
        </div>

        {/* Lado direito: Seleção da Chave PIX e Input */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "45%", // Usando porcentagem para responsividade
            // Removi o marginTop fixo para o alinhamento com 'alignItems: "flex-start"' funcionar melhor
            // Agora o lado direito começa alinhado com o topo do lado esquerdo
          }}
        >
          {/* Retângulo de seleção da Chave PIX */}
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "80px",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              color: "#fff",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                color: "#000000",
                marginBottom: "5px",
                marginTop: "-10px", // Ajuste fino para centralizar o texto verticalmente
              }}
            >
              Selecione a chave pix cadastrada
            </h3>
            <select
              value={chavePix}
              onChange={handlePixChange}
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                outline: "none",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <option value="celular">Celular</option>
              <option value="cpf">CPF</option>
              <option value="email">Email</option>
              <option value="aleatoria">Chave Aleatória</option>
            </select>
          </div>

          {/* Input para a Chave PIX */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "20px",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              Digite sua chave PIX:
            </p>
            <input
              type="text"
              placeholder={getPlaceholder()}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PontosCashback;
