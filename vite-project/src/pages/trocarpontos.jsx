import React from "react";
import { useNavigate } from "react-router";
// 1. Importar o hook UseTheme
import { UseTheme }  from "../componentes/ThemeContext.jsx";

// 2. CORREÇÃO: Componente renomeado para começar com letra maiúscula
const TrocarPontos = () => {
  const { darkMode } = UseTheme(); // Obter o estado do tema
  const navigate = useNavigate(); // --- 3. DEFINIÇÃO DE CORES TEMÁTICAS --- // Cores de fundo (Background) - Usando o mesmo gradiente do Relatório/Bateria

  const estiloDeFundo = {
    background: darkMode
      ? "linear-gradient(to bottom, #00072D, #3C1059)"
      : "linear-gradient(to bottom, #00B4D8)",
    color: darkMode ? "white" : "#222", // Cor do texto principal
    minHeight: "100vh", // Garante que cubra a tela
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    padding: "150px",
    marginTop: "70px",
    fontFamily: "Kodchasan, Arial, sans-serif",
  }; // Cor dos Retângulos
  const corRetangulo = darkMode ? "#0E6BA8" : "#379BDE"; // Azul escuro no tema escuro, azul claro no tema claro.
  const corTextoRetangulo = darkMode ? "white" : "white"; // Manter o texto branco para contraste // Estilo dos retângulos (Atualizado para ser uma função ou redefinido aqui)

  const rectangleStyle = {
    width: "50%",
    height: "130px", // Cor de fundo dinâmica
    backgroundColor: corRetangulo, // Cor do texto dinâmica
    color: corTextoRetangulo,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "26px",
    fontWeight: "bold",
    transition: "0.3s",
    textAlign: "center",
    fontFamily: "Kodchasan",
  };

  return (
    // 4. Aplicar o estilo de fundo dinâmico
    <div style={estiloDeFundo}>
            {/* Retângulo 1 */}     {" "}
      <div style={rectangleStyle} onClick={() => navigate("/pontosMercado")}>
                TROQUE PONTOS EM MERCADOS      {" "}
      </div>
            {/* Retângulo 2 */}     {" "}
      <div style={rectangleStyle} onClick={() => navigate("/pontosManutencao")}>
                TROQUE PONTOS EM MANUTENÇÕES      {" "}
      </div>
            {/* Retângulo 3 */}     {" "}
      <div style={rectangleStyle} onClick={() => navigate("/pontosHoteis")}>
                TROQUE PONTOS EM HOTÉIS      {" "}
      </div>
            {/* Retângulo 4 */}     {" "}
      <div style={rectangleStyle} onClick={() => navigate("/pontosProdutos")}>
                TROQUE PONTOS EM PRODUTOS EXCLUSIVOS      {" "}
      </div>
            {/* Retângulo 5 */}     {" "}
      <div style={rectangleStyle} onClick={() => navigate("/pontosCashback")}>
                CASHBACK DIRETO      {" "}
      </div>
         {" "}
    </div>
  );
};

// Removemos a definição estática do rectangleStyle do escopo global
// e a incluímos dentro do componente para que possa usar as variáveis do tema.
// Se você quiser manter o estilo de retângulo fora, ele precisará se tornar uma função
// que recebe 'darkMode' como argumento.

export default TrocarPontos;


