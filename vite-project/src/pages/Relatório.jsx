import React, { useState, useEffect } from "react";

const Relatorio = () => {
  const [historico, setHistorico] = useState([]);
  const [relatorio, setRelatorio] = useState([]);
  const [erro, setErro] = useState(null);

  const API_HISTORICO = "http://localhost:7264/api/Historico/historicoCompleto";
  const API_RELATORIO = "http://localhost:7264/api/Historico/relatorio?periodo=Mensal";

  useEffect(() => {
    // Buscar histórico completo
    const fetchHistorico = async () => {
      try {
        const response = await fetch(API_HISTORICO);
        if (!response.ok) throw new Error("Erro ao buscar histórico");
        const data = await response.json();
        setHistorico(data);
      } catch (err) {
        console.error(err);
        setErro("Erro ao acessar histórico");
      }
    };

    // Buscar relatório mensal
    const fetchRelatorio = async () => {
      try {
        const response = await fetch(API_RELATORIO);
        if (!response.ok) throw new Error("Erro ao buscar relatório");
        const data = await response.json();
        setRelatorio(data);
      } catch (err) {
        console.error(err);
        setErro("Erro ao acessar relatório");
      }
    };

    fetchHistorico();
    fetchRelatorio();
  }, []);

  const estiloDeFundo = {
    height: "100vh",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #00072D, #3C1059)",
    color: "#fff",
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
    background: "rgba(0,0,0,0.6)",
  };
  const estiloCelula = {
    border: "1px solid #ccc",
    color: "#fff",
    padding: "12px 20px",
    textAlign: "left",
  };

  return (
    <div style={estiloDeFundo}>
      <div style={estiloContainer}>
        {erro ? (
          <p>{erro}</p>
        ) : (
          <table style={estiloTabela}>
            <tbody>
              {(historico.length > 0 ? historico : relatorio).map(
                (item, index) => (
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
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Relatorio;
