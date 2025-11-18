import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrigir ícone padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Atualiza o centro do mapa
function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.setView(center, 15);
  }, [center, map]);
  return null;
}

export default function MapaComRota() {
  const [posicaoAtual, setPosicaoAtual] = useState(null);
  const [destino, setDestino] = useState("");
  const [coordenadasDestino, setCoordenadasDestino] = useState(null);
  const [rota, setRota] = useState(null);
  const [sugestoes, setSugestoes] = useState([]);
  const [mensagem, setMensagem] = useState("");

  // Detectar localização atual automaticamente
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => {
        const coords = { lat: p.coords.latitude, lng: p.coords.longitude };
        setPosicaoAtual(coords);
      });
    }
  }, []);

  // Buscar endereços
  const buscarSugestoes = async (texto) => {
    setDestino(texto);
    if (texto.length < 3) {
      setSugestoes([]);
      return;
    }

    if (!posicaoAtual) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      texto
    )}&addressdetails=1&limit=5`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setSugestoes(
        data.map((item) => ({
          nome: item.display_name,
          lat: parseFloat(item.lat),
          lon: parseFloat(item.lon),
        }))
      );
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    }
  };

  // Calcular rota
  const calcularRota = async (coordDestino) => {
    if (!posicaoAtual) return;

    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${posicaoAtual.lng},${posicaoAtual.lat};${coordDestino.lon},${coordDestino.lat}?overview=full&geometries=geojson`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.routes && data.routes.length > 0) {
        const rotaCoords = data.routes[0].geometry.coordinates.map((c) => [
          c[1],
          c[0],
        ]);
        setRota(rotaCoords);
        setCoordenadasDestino({
          lat: coordDestino.lat,
          lng: coordDestino.lon,
        });
        setSugestoes([]);
        setMensagem(`Destino encontrado: ${coordDestino.nome}`);
      } else {
        setMensagem("Rota não encontrada 😕");
      }
    } catch (err) {
      console.error("Erro ao calcular rota:", err);
      setMensagem("Erro ao buscar a rota");
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      {/* Barra de pesquisa ajustada */}
      <div
        style={{
          position: "absolute",
          top: "100px", // Ajuste a posição vertical da barra de pesquisa
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          background: "#ffffff",
          padding: "15px",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          value={destino}
          onChange={(e) => buscarSugestoes(e.target.value)}
          placeholder="Digite um endereço completo"
          style={{
            width: "100%",
            padding: "12px 15px",
            borderRadius: "20px",
            border: "1px solid #a6e9ff",
            fontSize: "15px",
            outline: "none",
          }}
        />
        {sugestoes.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: "8px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
              maxHeight: "160px",
              overflowY: "auto",
            }}
          >
            {sugestoes.map((s, i) => (
              <li
                key={i}
                onClick={() => {
                  setDestino(s.nome);
                  calcularRota(s);
                }}
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid #eee",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                📍 {s.nome}
              </li>
            ))}
          </ul>
        )}
        {mensagem && (
          <p style={{ marginTop: "6px", fontSize: "13px", color: "#555" }}>
            {mensagem}
          </p>
        )}
      </div>

      {/* Mapa */}
      {posicaoAtual ? (
        <MapContainer
          center={posicaoAtual}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={posicaoAtual}></Marker>
          {coordenadasDestino && (
            <Marker position={coordenadasDestino}></Marker>
          )}
          {rota && <Polyline positions={rota} color="#0077B6" weight={6} />}
          <ChangeView center={posicaoAtual} />
        </MapContainer>
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            color: "#555",
          }}
        >
          Obtendo localização...
        </div>
      )}
    </div>
  );
}
