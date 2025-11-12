import React, { useState } from "react";

const PontosCashback = () => {
  const [pontos, setPontos] = useState(1000);
  const [chavePix, setChavePix] = useState("celular"); // Estado para armazenar a chave PIX selecionada
  const handleChange = (event) => {
    setPontos(Number(event.target.value));

  };

  const handlePixChange = (event) => {
    setChavePix(event.target.value); // Atualiza o estado com a opção selecionada
  };

  const pontosOptions = [];
  for (let i = 1000; i <= 4000; i += 500) {
    pontosOptions.push(i);
  }

  const getPlaceholder = () => {
    switch (chavePix) {
      case "celular":
        return "Digite seu número de celular";
      case "cpf":
        return "Digite seu CPF";
      case "email":
        return "Digite seu email";
      default:
        return "Digite aqui";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh", 
        padding: "0 100px",
        backgroundColor: "#00072D",
      }}
    >
      {/* Lado esquerdo: Seleção de pontos */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            color: "#fff",
            fontSize: "36px",
          }}
        >
          SELECIONE A QUANTIDADE DE PONTOS
        </h2>
        <div
          style={{
            width: "400px",
            height: "80px",
            backgroundColor: "#00B4D8",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <select
            value={pontos}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              color: "#000",
              border: "none",
              outline: "none",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {pontosOptions.map((ponto) => (
              <option key={ponto} value={ponto}>
                {ponto} Pontos
              </option>
            ))}
          </select>
        </div>
        <p
          style={{
            marginTop: "30px",
            color: "#fff",
            fontSize: "24px",
          }}
        >
          Você selecionou: {pontos} pontos
        </p>
        <p
          style={{
            marginTop: "20px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "34px",
          }}
        ></p>



<div
          style={{
            
            display: "flex",      
    flexDirection: "column",
    alignItems: "center",
    marginLeft:"900px",
    marginTop:"-80px",
    justifyContent: "center",
    backgroundColor: "#00B4D8",
    padding: "20px",
    borderRadius: "10px",
    color: "#fff",
          }}
        >
            <h3>Selecione a chave pix cadastrada</h3>
          <select
          value={chavePix}
          onChange={handlePixChange}
            style={{ 
              width: "100%",
              height: "100%",
              marginTop: "10px",
              backgroundColor: "transparent",
              color: "#000",
              border: "none",
              outline: "none",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
              
            }}
          >
            <option value="celular">Celular</option>
    <option value="cpf">CPF</option>
    <option value="email">Email</option>
          </select>



        </div>


<div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
     marginLeft:"800px",
      marginTop: "20px",
      width: "100%",
    }}
  >
    <p
      style={{
        fontSize: "18px",
        color: "#fff",
        marginBottom: "10px",
      }}
    >
      Digite sua chave PIX:
    </p>
    <input
      type="text"
      placeholder={getPlaceholder()} 
      style={{
        width: "30%",
        marginRight: "60px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
        outline: "none",
      }}
    />
  </div>
       
        
      </div>
    </div>
  );
};

export default PontosCashback;
