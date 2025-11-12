import React from "react";
import Mercado from "./PontosMercado";
import Manutencoes from "./PontosManutencao";
import Hoteis from "./PontosHoteis";
import Cashback from "./PontosCashback";
import Produtos from "./PontosProdutos";
import { UseNavigate } from "react-router";

const trocarpontos = () => {
  const navigate = UseNavigate(); // Inicializa o hook useNavigate

  return (
    <div
      style={{
        backgroundColor: "#00072D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        padding: "150px",
        marginTop: "70px",
      }}
    >
      {/* Retângulo 1 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/pontosMercado")} // Redireciona para /mercados
      >
        TROQUE PONTOS EM MERCADOS
      </div>

      {/* Retângulo 2 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/pontosManutencao")} // Redireciona para /manutencoes
      >
        TROQUE PONTOS EM MANUTENÇÕES
      </div>

      {/* Retângulo 3 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/pontosHoteis")} // Redireciona para /hoteis
      >
        TROQUE PONTOS EM HOTÉIS
      </div>

      {/* Retângulo 4 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/pontosProdutos")} // Redireciona para /produtos-exclusivos
      >
        TROQUE PONTOS EM PRODUTOS EXCLUSIVOS
      </div>

      {/* Retângulo 5 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/pontosCashback")} // Redireciona para /outros
      >
        CASHBACK DIRETO
      </div>
    </div>
  );
};

// Estilo dos retângulos
const rectangleStyle = {
  width: "50%",
  height: "130px",
  backgroundColor: "#0E6BA8",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "30px",
  cursor: "pointer",
  fontSize: "26px",
  fontWeight: "bold",
  transition: "0.3s",
  textAlign: "center",
  fontFamily:"Kodchasan",

};

export default trocarpontos;
