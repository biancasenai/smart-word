import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      {/* Esquerda */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '200px',
        alignItems: 'flex-end',
        marginRight: '100px'
      }}>
        <button  className="theme-button" onClick={() => navigate('/relatorio')}>RELATÓRIO</button>
        <button  className="theme-button" onClick={() => navigate('/trocar-pontos')}>TROCA DE PONTOS</button>
      </div>
      {/* Direita */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '200px',
        alignItems: 'flex-start',
        marginLeft: '60px',
       
      }}>
        <button className="theme-button" onClick={() => navigate('/bateria')}>BATERIA</button>
        <button  className="theme-button" onClick={() => navigate('/navegar')}>NAVEGAÇÃO</button>
      </div>
    </div>
  );
}

// ...existing code...
const buttonStyle = {
  fontFamily: "Kodchasan, Arial, sans-serif",
  width: '520px',
  padding: '56px',
  borderRadius: '16px',
  border: 'none',
  background: 'linear-gradient(90deg, #F37E7E 60%, #FF76A1 100%)',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  transition: 'transform 0.1s',
};
// ...existing code...

export default Home;