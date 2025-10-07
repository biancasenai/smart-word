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

// Atualiza a posição do mapa
function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.setView(center, 14);
  }, [center, map]);
  return null;
}

export default function MapaComRota() {
  const [posicaoAtual, setPosicaoAtual] = useState(null);
  const [partida, setPartida] = useState("");
  const [destino, setDestino] = useState("");
  const [coordenadasPartida, setCoordenadasPartida] = useState(null);
  const [coordenadasDestino, setCoordenadasDestino] = useState(null);
  const [rota, setRota] = useState(null);
  const [erro, setErro] = useState(null); // Estado para mensagem de erro
  const [mostrarBarra, setMostrarBarra] = useState(false); // Controle para exibir/esconder a barra

  // Detectar localização atual
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => {
        const coords = { lat: p.coords.latitude, lng: p.coords.longitude };
        setPosicaoAtual(coords);
        setCoordenadasPartida(coords);
        setPartida("Meu local atual");
      });
    }
  }, []);

  // Função para buscar endereço (Nominatim)
  const buscarEndereco = async (endereco, tipo) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      endereco
    )}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.length > 0) {
      const coord = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };
      if (tipo === "partida") {
        setCoordenadasPartida(coord);
      } else {
        setCoordenadasDestino(coord);
      }
      setErro(null); // Limpa o erro se o local for encontrado
    } else {
      setErro(`Endereço "${endereco}" não encontrado.`); // Define a mensagem de erro
    }
  };

  // Calcular rota via API OSRM
  const calcularRota = async () => {
    if (!coordenadasPartida || !coordenadasDestino) {
      setErro("Por favor, insira os pontos de partida e destino.");
      return;
    }

    const url = `https://router.project-osrm.org/route/v1/driving/${coordenadasPartida.lng},${coordenadasPartida.lat};${coordenadasDestino.lng},${coordenadasDestino.lat}?overview=full&geometries=geojson`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.routes && data.routes.length > 0) {
      const rotaCoords = data.routes[0].geometry.coordinates.map((c) => [
        c[1],
        c[0],
      ]);
      setRota(rotaCoords);
      setErro(null); // Limpa o erro se a rota for encontrada
    } else {
      setErro("Não foi possível calcular a rota."); // Define a mensagem de erro
    }
  };

  const handleBuscar = async (e) => {
    e.preventDefault();
    if (partida && partida !== "Meu local atual")
      await buscarEndereco(partida, "partida");
    if (destino) await buscarEndereco(destino, "destino");
  };

  useEffect(() => {
    if (coordenadasPartida && coordenadasDestino) {
      calcularRota();
    }
  }, [coordenadasPartida, coordenadasDestino]);

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      {/* Botão para voltar à página anterior */}
      <button
        onClick={() => window.history.back()}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1000,
          background: "#0077B6",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
        }}
      >
        ◀ Voltar
      </button>

      {/* Ícone para abrir a barra de pesquisa */}
      <div
        onClick={() => setMostrarBarra(!mostrarBarra)}
        style={{
          position: "absolute",
          top: "180px", // Movido mais para baixo
          left: "40px",
          zIndex: 1000,
          background: "#90E0EF",
          padding: "20px", // Tamanho do botão aumentado
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
        }}
      >
        <span role="img" aria-label="search" style={{ fontSize: "24px" }}>
          🔍
        </span>
      </div>

      {/* Barra de busca */}
      {mostrarBarra && (
        <form
          onSubmit={handleBuscar}
          style={{
            position: "absolute",
            top: "150px",
            left: "20px",
            zIndex: 1000,
            background: "#90E0EF",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
            width: "300px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <label style={{ fontWeight: "bold" }}>🚩 Ponto de Partida</label>
            <input
              type="text"
              value={partida}
              onChange={(e) => setPartida(e.target.value)}
              placeholder="Rua, bairro, CEP..."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "20px",
                marginTop: "5px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "bold" }}>🏁 Destino</label>
            <input
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="Rua, bairro, CEP..."
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "20px",
                marginTop: "5px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "15px", // Aumentado o tamanho do botão
              borderRadius: "20px",
              background: "#0077B6",
              color: "#fff",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Calcular Rota 🚗
          </button>
        </form>
      )}

      {/* Exibir mensagem de erro */}
      {erro && (
        <div
          style={{
            position: "absolute",
            top: "120px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            background: "#ffcccc",
            color: "#cc0000",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
            width: "90%",
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          {erro}
        </div>
      )}

      {/* Mapa */}
      <MapContainer
        center={posicaoAtual || [-22, -48]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {posicaoAtual && <Marker position={posicaoAtual} />}
        {coordenadasDestino && <Marker position={coordenadasDestino} />}
        {/* Rota */}
        {rota && <Polyline positions={rota} color="#0077B6" weight={6} />}
      </MapContainer>
    </div>
  );
}
