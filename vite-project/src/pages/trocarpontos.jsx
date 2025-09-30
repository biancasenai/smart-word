import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate

const TrocarPontos = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        padding: "20px",
        marginTop: "70px",
      }}
    >
      {/* Retângulo 1 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/mercados")} // Redireciona para /mercados
      >
        TROQUE PONTOS EM MERCADOS
      </div>

      {/* Retângulo 2 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/manutencoes")} // Redireciona para /manutencoes
      >
        TROQUE PONTOS EM MANUTENÇÕES
      </div>

      {/* Retângulo 3 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/hoteis")} // Redireciona para /hoteis
      >
        TROQUE PONTOS EM HOTÉIS
      </div>

      {/* Retângulo 4 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/produtos-exclusivos")} // Redireciona para /produtos-exclusivos
      >
        TROQUE PONTOS EM PRODUTOS EXCLUSIVOS
      </div>

      {/* Retângulo 5 */}
      <div
        style={rectangleStyle}
        onClick={() => navigate("/outros")} // Redireciona para /outros
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
  backgroundColor: "#F37E7E",
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
};

export default TrocarPontos;