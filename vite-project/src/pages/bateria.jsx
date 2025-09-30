// Bateria.jsx
import React, { useState } from "react";

export default function Bateria() {
  const [dark, setDark] = useState(true);
  const percent = 20;
  const tempo = "8 horas";

  return (
    <div style={{ ...styles.page, backgroundColor: dark ? "#101A88" : "#FBC4A0" }}>
      {/* Botão de troca de tema */}
      <button onClick={() => setDark(!dark)} style={styles.button}>
        Alternar para {dark ? "Light" : "Dark"}
      </button>

      {/* Bateria */}
      <div style={{ ...styles.battery, borderColor: dark ? "#FF4E88" : "#6D214F" }}>
        <div style={{ ...styles.level, background: dark ? "linear-gradient(90deg,#FF4E88,#8B2E5D)" : "linear-gradient(90deg,#F78FB3,#C44569)" }} />
        <span style={{ ...styles.percent, color: dark ? "#fff" : "#222" }}>
          {percent}%
        </span>
      </div>

      {/* Texto embaixo */}
      <p style={{ ...styles.text, color: dark ? "#fff" : "#222" }}>
        Bateria {percent}% faltam {tempo} para estar completa
      </p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease"
  },
  button: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600"
  },
  battery: {
    width: "400px",
    height: "200px",
    border: "5px solid",
    borderRadius: "20px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  level: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "20%", // largura proporcional ao % da bateria
    opacity: 0.5,
    borderRadius: "0 15px 15px 0"
  },
  percent: {
    fontSize: "80px",
    fontWeight: "bold",
    zIndex: 2
  },
  text: {
    marginTop: "40px",
    fontSize: "24px",
    fontWeight: "500"
  }
};
