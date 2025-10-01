import React from 'react';

const Relatório = () => {
  const estiloDeFundo = {
    height: '100vh',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #151B8B, #6E279E)',
    color: '#fff',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
  };

  const estiloContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };

  const estiloTabela = {
    width: '70%',
    borderCollapse: 'collapse',
    background: 'rgba(0, 0, 0, 0.6)',
  };

  const estiloCelula = {
    border: '1px solid #ccc',
    color: '#fff',
    fontFamily: 'Kodchasan',
    padding: '12px 20px',
    textAlign: 'left',
  };

  return (
    <div style={estiloDeFundo}>
      <div style={estiloContainer}>
        <table style={estiloTabela}>
          <tbody>
            <tr>
              <td style={estiloCelula}>01/10/2025</td>
              <td style={estiloCelula}>Supermercado Confiança</td>
              <td style={estiloCelula}>ECONOMIZOU 3HORAS<br />REDUZIU EM 4% DE CO2</td>
            </tr>
            <tr>
              <td style={estiloCelula}>29/09/2025</td>
              <td style={estiloCelula}>Hotel Palace</td>
              <td style={estiloCelula}>ECONOMIZOU 3HORAS<br />REDUZIU EM 4% DE CO2</td>
            </tr>
            <tr>
              <td style={estiloCelula}>28/09/2025</td>
              <td style={estiloCelula}>Mecânica Abelhão</td>
              <td style={estiloCelula}>ECONOMIZOU 3HORAS<br />REDUZIU EM 4% DE CO2</td>
            </tr>
            <tr>
              <td style={estiloCelula}>29/09/2025</td>
              <td style={estiloCelula}>Ferracini</td>
              <td style={estiloCelula}>ECONOMIZOU 3HORAS<br />REDUZIU EM 4% DE CO2</td>
            </tr>
            <tr>
              <td style={estiloCelula}>29/09/2025</td>
              <td style={estiloCelula}>Jaú Serve</td>
              <td style={estiloCelula}>ECONOMIZOU 3HORAS<br />REDUZIU EM 4% DE CO2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Relatório;
