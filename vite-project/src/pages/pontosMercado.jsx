import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { UseTheme } from "../componentes/ThemeContext"; // Importa o contexto de tema

const PontosMercado = () => {
  const { darkMode } = UseTheme(); // Usa o contexto para obter o estado do tema
  const [pontos, setPontos] = useState(1000);

  const handleChange = (event) => {
    setPontos(Number(event.target.value));
  };

  const pontosOptions = [];
  for (let i = 1000; i <= 4000; i += 500) {
    pontosOptions.push(i);
  }

  const qrCodeValue = ` ${pontos / 100}% de desconto `;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        padding: "0 100px",
        backgroundColor: darkMode ? "#00072D" : "#00B4D8", // Cor de fundo dinâmica
        color: darkMode ? "#151b8b" : "#000", // Cor do texto dinâmica
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
            color: darkMode ? "#fff" : "#000", // Cor do texto dinâmica
            fontSize: "36px",
            fontFamily: "Kodchasan",
          }}
        >
          SELECIONE A QUANTIDADE DE PONTOS
        </h2>
        <div
          style={{
            width: "400px",
            height: "80px",
            backgroundColor: darkMode ? "#00B4D8" : "#E0E0E0", // Cor de fundo dinâmica
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
              color: darkMode ? "#000" : "#000",
              border: "none",
              outline: "none",
              textAlign: "center",
              fontSize: "24px",
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
            color: darkMode ? "#fff" : "#000", // Cor do texto dinâmica
            fontSize: "24px",
            fontFamily: "Kodchasan",
          }}
        >
          Você selecionou: {pontos} pontos
        </p>
        <p
          style={{
            marginTop: "20px",
            color: darkMode ? "#fff" : "#000", // Cor do texto dinâmica
            fontWeight: "bold",
            fontSize: "34px",
          }}
        ></p>
      </div>

      {/* Lado direito: QR Code */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: darkMode ? "#fff" : "#f0f0f0", // Cor de fundo dinâmica
          padding: "40px",
          borderRadius: "20px",
          margin: "0 auto", // Centraliza horizontalmente
        }}
      >
        <h3
          style={{
            marginBottom: "30px",
            color: darkMode ? "#151b8b" : "#000", // Cor do texto dinâmica
            fontSize: "28px",
            fontFamily: "Kodchasan",
          }}
        >
          ESCANEIE O QR CODE
        </h3>
        <QRCodeCanvas
          value={qrCodeValue}
          size={450} // Aumenta o tamanho do QR Code
          bgColor={darkMode ? "#ffffff" : "#000"} // Cor de fundo do QR Code dinâmica
          fgColor={darkMode ? "#000000" : "#ffffff"} // Cor do QR Code dinâmica
        />
        <p
          style={{
            marginTop: "20px",
            color: darkMode ? "#151b8b" : "#000", // Cor do texto dinâmica
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          {qrCodeValue}
        </p>
      </div>
    </div>
  );
};

export default PontosMercado;