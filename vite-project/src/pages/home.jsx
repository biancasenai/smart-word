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

export default Home;