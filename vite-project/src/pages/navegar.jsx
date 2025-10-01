import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const centerDefault = { lat: -23.55, lng: -46.63 }; // fallback caso geolocalização não funcione

const Navegar = () => {
  const [partida, setPartida] = useState("");
  const [destino, setDestino] = useState("");
  const [localAtual, setLocalAtual] = useState(centerDefault);
  const [directions, setDirections] = useState(null);
  const [calculate, setCalculate] = useState(false);

  // Geolocalização automática
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocalAtual({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setPartida("Meu Local Atual");
      });
    }
  }, []);

  const handleCalculateRoute = () => {
    if (!destino) return;
    setCalculate(true); // ativa DirectionsService
  };

  return (
    <LoadScript googleMapsApiKey="SUA_API_KEY_AQUI">
      {/* Inputs de partida e destino */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "90%",
          maxWidth: "600px",
          background: "#fff",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          <label>🚩 Seu local / Partida</label>
          <input
            type="text"
            value={partida}
            onChange={(e) => setPartida(e.target.value)}
            placeholder="Digite o ponto de partida"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label>🏁 Lugar de parada / Destino</label>
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Digite o destino"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button
          onClick={handleCalculateRoute}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            borderRadius: "10px",
            background: "#4285F4",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Calcular Rota
        </button>
      </div>

      {/* Mapa */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={localAtual}
        zoom={13}
      >
        <Marker position={localAtual} />
        {calculate && partida && destino && (
          <DirectionsService
            options={{
              origin: partida === "Meu Local Atual" ? localAtual : partida,
              destination: destino,
              travelMode: "DRIVING",
            }}
            callback={(res, status) => {
              if (status === "OK") {
                setDirections(res);
                setCalculate(false);
              }
            }}
          />
        )}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Navegar;
