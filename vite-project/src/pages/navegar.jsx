import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl });

const Navegar = () => {
  const [partida, setPartida] = useState("");  // lugar de saída
  const [destino, setDestino] = useState("");  // lugar de chegada
  const [localAtual, setLocalAtual] = useState(null); // coordenadas do usuário

  // Pegar localização atual automaticamente
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocalAtual([pos.coords.latitude, pos.coords.longitude]);
        setPartida("Meu Local Atual");
      });
    }
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      {/* Barra de pesquisa */}
      <div style={{
        position: "absolute",
        top: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "#fff",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
        width: "90%",
        maxWidth: "600px"
      }}>
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
      </div>

      {/* Mapa */}
      <MapContainer
        center={localAtual || [-23.55, -46.63]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {localAtual && (
          <Marker position={localAtual}>
            <Popup>📍 Você está aqui</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Navegar;
