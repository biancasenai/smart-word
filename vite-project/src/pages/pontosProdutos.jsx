import React, { useState } from "react";
import { UseTheme } from "../componentes/ThemeContext"; // Importa o contexto de tema

const PontosProdutos = () => {
  const { darkMode } = UseTheme(); // Usa o contexto para obter o estado do tema
  const [pontos, setPontos] = useState(1000);
  const [codigo, setCodigo] = useState(""); // Estado para armazenar o código gerado

  const handleChange = (event) => {
    const pontosSelecionados = Number(event.target.value);
    setPontos(pontosSelecionados);

    // Gera o código aleatório apenas ao mudar a seleção
    const codigoAleatorio = `${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCodigo(codigoAleatorio);
  };

  const pontosOptions = [];
  for (let i = 1000; i <= 4000; i += 500) {
    pontosOptions.push(i);
  }

  // Estilo base do contêiner principal (tela inteira, centralizando o conteúdo)
  const containerStyle = {
    display: "flex",
    justifyContent: "center", // Centraliza horizontalmente
    alignItems: "center", // Centraliza verticalmente
    height: "100vh",
    padding: "0 100px",
    backgroundColor: darkMode ? "#00072D" : "#00B4D8",
    color: darkMode ? "#fff" : "#000",
    fontFamily: "Kodchasan",
  };

  // Contêiner que define o layout das duas colunas (ESQUERDA e DIREITA)
  const contentWrapperStyle = {
    display: "flex",
    justifyContent: "space-between", // Coloca a coluna da esquerda e direita nas pontas do wrapper
    alignItems: "flex-start", // Alinha os itens ao topo do wrapper
    width: "100%", 
    maxWidth: "1200px", // Define uma largura máxima para o bloco de conteúdo
  };
  
  // Estilo para o grupo de componentes da ESQUERDA (Seleção de Pontos)
  const leftColumnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Alinha o conteúdo da coluna à esquerda
  };

  // Estilo para o grupo de componentes da DIREITA (Mensagem e Código)
  const rightColumnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // Alinha o texto e o código à direita
    textAlign: "right",
  };

  return (
    <div style={containerStyle}>
      
      {/* Wrapper para as duas colunas, centralizado na tela */}
      <div style={contentWrapperStyle}>
          
          {/* Coluna da Esquerda: Seleção de pontos */}
          <div style={leftColumnStyle}>
            <h2
              style={{
                marginBottom: "40px",
                color: "#fff",
                fontSize: "36px",
                fontFamily: "Kodchasan",
              }}
            >
              SELECIONE A QUANTIDADE DE PONTOS
            </h2>
            <div
              style={{
                width: "400px", // RESTAURADO o estilo original
                height: "80px", // RESTAURADO o estilo original
                backgroundColor: "#fff",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px", // RESTAURADO o estilo original
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
                  fontSize: "24px", // RESTAURADO o estilo original
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontFamily: "Kodchasan",
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
                fontFamily: "Kodchasan",
              }}
            >
              Você selecionou: {pontos} pontos
            </p>
          </div>

          {/* Coluna da Direita: Mensagem e Código */}
          <div style={rightColumnStyle}>
            <p
              style={{
                fontSize: "20px", // RESTAURADO o tamanho de fonte original
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "15px", 
                fontFamily: "Kodchasan",
                // Removida a largura máxima para quebrar a linha conforme o original
              }}
            >
              INSIRA O CÓDIGO NO CARRINHO PARA GARANTIR SEU DESCONTO!
            </p>

            {codigo && (
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#00072D", // Cor ajustada para ter contraste com fundo branco
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "8px 15px",
                  letterSpacing: "3px",
                  display: "inline-block",
                }}
              >
                {codigo}
              </p>
            )}
          </div>
      </div>
    </div>
  );
};

export default PontosProdutos;