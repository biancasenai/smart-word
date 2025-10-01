import React, { useState } from "react";


const PontosMercado = () => {
  const [pontos, setPontos] = useState(1000);

  const handleChange = (event) => {
    setPontos(Number(event.target.value));
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
        backgroundColor: "#151b8b",
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
        <h2
          style={{
            marginBottom: "40px",
            color: "#fff",
            fontSize: "36px",
          }}
        >
          SELECIONE A QUANTIDADE DE PONTOS
        </h2>
        <div
          style={{
            width: "400px",
            height: "80px",
            backgroundColor: "#F37E7E",
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
          Você selecionou: {pontos} pontos
        </p>
        <p
          style={{
            marginTop: "20px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "34px",
          }}
        >
         
        </p>
      </div>

       
       
       
      
    </div>
  );
};

export default PontosMercado;