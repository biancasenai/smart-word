import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/home';

function App() {
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={`app${dark ? ' dark' : ''}`}>
      <header className="header-bar">
        <h1>
          smart<br />
          word
        </h1>
        <button
          className={`theme-toggle${dark ? ' active' : ''}`}
          onClick={() => setDark((v) => !v)}
          aria-label="Alternar tema"
        >
          <span className="toggle-track">
            <span className="toggle-ball" />
          </span>
        </button>
      </header>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
