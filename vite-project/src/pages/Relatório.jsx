import React from "react";
import { UseTheme } from "../componentes/ThemeContext";

const Relatorio = () => {
  const { darkMode } = UseTheme();

  const dados = [
    {
      data: "01/06/2024",
      local: "Escritório",
      economia: { horas: 2 },
      reducaoCO2: 15,
    },
    {
      data: "02/06/2024",
      local: "Casa",
      economia: { horas: 1 },
      reducaoCO2: 10,
    },
  ];

  const estiloDeFundo = {
    height: "100vh",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: darkMode
      ? "linear-gradient(to bottom, #00072D, #3C1059)"
      : "linear-gradient(to bottom, #00B4D8, #B6F3FF)",
    color: darkMode ? "#fff" : "#222",
    fontSize: "18px",
    fontFamily: "Kodchasan, Arial, sans-serif",
  };

  const estiloContainer = {
    width: "90%",
    display: "flex",
    justifyContent: "center",
  };
  const estiloTabela = {
    width: "100%",
    borderCollapse: "collapse",
    background: darkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.8)",
  };
  const estiloCelula = {
    border: "1px solid #ccc",
    color: darkMode ? "#fff" : "#222",
    padding: "12px 20px",
    textAlign: "left",
  };

  return (
    <div style={estiloDeFundo}>
      <div style={estiloContainer}>
        <table style={estiloTabela}>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index}>
                <td style={estiloCelula}>{item.data}</td>
                <td style={estiloCelula}>{item.local}</td>
                <td style={estiloCelula}>
                  {item.economia
                    ? `ECONOMIZOU ${item.economia.horas} HORAS`
                    : ""}
                  <br />
                  {item.reducaoCO2
                    ? `REDUZIU EM ${item.reducaoCO2}% DE CO2`
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Relatorio;