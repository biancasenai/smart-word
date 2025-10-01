import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
  Autocomplete,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const centerDefault = { lat: -23.55, lng: -46.63 }; // fallback

const POIs = [
  {
    id: 1,
    name: "Posto de Gasolina",
    position: { lat: -23.551, lng: -46.635 },
  },
  { id: 2, name: "Restaurante", position: { lat: -23.553, lng: -46.631 } },
  { id: 3, name: "Estacionamento", position: { lat: -23.549, lng: -46.632 } },
];

const Navegar = () => {
  const [localAtual, setLocalAtual] = useState(centerDefault);
  const [partida, setPartida] = useState("");
  const [destino, setDestino] = useState("");
  const [directions, setDirections] = useState(null);
  const [calculate, setCalculate] = useState(false);
  const [routeInfo, setRouteInfo] = useState(null);
  const [selectedPOI, setSelectedPOI] = useState(null);

  const partidaRef = useRef(null);
  const destinoRef = useRef(null);

  // Geolocalização
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocalAtual({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setPartida("Meu Local Atual");
      });
    }
  }, []);

  const handleCalculateRoute = () => {
    if (!destino) return;
    setCalculate(true);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCU9RW5uBqT1MXTOJD2eoiB_nbIa9ZZYro"
      libraries={["places"]}
    >
      {/* Inputs */}
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
          <Autocomplete onLoad={(auto) => (partidaRef.current = auto)}>
            <input
              type="text"
              value={partida}
              onChange={(e) => setPartida(e.target.value)}
              placeholder="Digite o ponto de partida"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </Autocomplete>
        </div>
        <div>
          <label>🏁 Lugar de parada / Destino</label>
          <Autocomplete onLoad={(auto) => (destinoRef.current = auto)}>
            <input
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="Digite o destino"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </Autocomplete>
        </div>
        <button
          onClick={handleCalculateRoute}
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "100%",
            borderRadius: "100px",
            background: "#7e22c4",
            color: "#ffffff",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            paddingTop: "10px",
          }}
        >
          Calcular Rota
        </button>

        {/* Info da rota */}
        {routeInfo && (
          <div style={{ marginTop: "10px", fontWeight: "bold" }}>
            Distância: {routeInfo.distance} | Tempo: {routeInfo.duration}
          </div>
        )}
      </div>

      {/* Mapa */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={localAtual}
        zoom={13}
      >
        <Marker position={localAtual} />

        {/* POIs */}
        {POIs.map((poi) => (
          <Marker
            key={poi.id}
            position={poi.position}
            onClick={() => setSelectedPOI(poi)}
          />
        ))}
        {selectedPOI && (
          <InfoWindow
            position={selectedPOI.position}
            onCloseClick={() => setSelectedPOI(null)}
          >
            <div>{selectedPOI.name}</div>
          </InfoWindow>
        )}

        {/* Direções */}
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
                const route = res.routes[0].legs[0];
                setRouteInfo({
                  distance: route.distance.text,
                  duration: route.duration.text,
                });
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
