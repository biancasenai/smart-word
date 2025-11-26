import React, { useState } from "react";
import { UseTheme } from "../componentes/ThemeContext"; // Importa o contexto de tema


const PontosProdutos = () => {
  const { darkMode } = UseTheme(); // Usa o contexto para obter o estado do tema
  const [pontos, setPontos] = useState(1000);
  const [codigo, setCodigo] = useState(""); // Estado para armazenar o código gerado

  const handleChange = (event) => {
    const pontosSelecionados = Number(event.target.value);
    setPontos(pontosSelecionados);

   
    // Gera apenas um código aleatório
    const codigoAleatorio = `${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setCodigo(codigoAleatorio);
  };


  const pontosOptions = [];
  for (let i = 1000; i <= 4000; i += 500) {
    pontosOptions.push(i);
  }
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        padding: "0 100px",
        backgroundColor: darkMode ? "#00072D" : "#00B4D8", // Cor de fundo dinâmica
        color: darkMode ? "#fff" : "#000", // Cor do texto dinâmica
        fontFamily: "Kodchasan",
      }}
    >
      {/* Lado esquerdo: Seleção de pontos */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
       
        <p
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
    marginTop: "-200px", // Subir o texto
    marginLeft: "600px",
    width: "80%",
    fontFamily:"Kodchasan",

  }}
>
  INSIRA O CÓDIGO NO CARRINHO PARA GARANTIR SEU DESCONTO!
</p>
<h2
          style={{
            marginBottom: "40px",
            color: "#fff",
            fontSize: "36px",
            fontFamily:"Kodchasan",

          }}
        >
          SELECIONE A QUANTIDADE DE PONTOS
        </h2>
        <div
          style={{
            width: "400px",
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
              fontFamily:"Kodchasan",

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
            fontFamily:"Kodchasan",

          }}
        >
          Você selecionou: {pontos} pontos
        </p>
        <p
          style={{
            marginTop: "20px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "34px",
          }}
        ></p>

      
{codigo && (
  <>
    

    {/* Código gerado */}
    <p
  style={{
    fontSize: "26px",
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "right",
    marginTop: "-250px",
    marginLeft: "1120px",
    width: "20%",
    backgroundColor: "transparent",
    
    borderRadius: "10px",
    padding: "12px 20px",
    letterSpacing: "3px",
    display: "inline-block",
  }}
>
  {codigo}
</p>

  </>
)}
       
      </div>
    </div>
  );
};

export default PontosProdutos;
