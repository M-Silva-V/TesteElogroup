import React, { useState } from "react";
import InputMask from "react-input-mask";
import api from "./services/api";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [know, setKnow] = useState("");
  const [socialNetwork, setSocialNetwork] = useState("");
  const [what, setWhat] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (know === "") {
        alert("Está faltando informações!");
      } else {
        if (socialNetwork === "true") {
          await api.post("/form", {
            name: {
              firstName,
              lastName
            },
            telephone,
            know,
            socialNetwork,
            what
          });
        } else {
          await api.post("/form", {
            name: {
              firstName,
              lastName
            },
            telephone,
            know,
            socialNetwork
          });
        }
        alert("Dados Salvos com Sucesso!");
        document.getElementById("enviar").disabled = true;
      }
    } catch (err) {
      alert("Erro!");
    }
  }

  function Desativar() {
    document.getElementById("Facebook").disabled = true;
    document.getElementById("LinkedIn").disabled = true;
    document.getElementById("Instagram").disabled = true;
  }

  function Ativar() {
    document.getElementById("Facebook").disabled = false;
    document.getElementById("LinkedIn").disabled = false;
    document.getElementById("Instagram").disabled = false;
  }

  return (
    <form id="formUpdateEl" onSubmit={handleSubmit}>
      <strong>Formulário</strong>
      <div className="form-name">
        <label htmlFor="firstName">Nome</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          placeholder="Digite seu Nome"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Sobrenome</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          placeholder="Digite seu Sobrenome"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="form-telephone">
        <label htmlFor="telephone">Telefone</label>
        <InputMask
          required
          mask="99-999999999"
          placeholder="Digite seu Telefone: (99) 99999-9999"
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        ></InputMask>
      </div>
      <div className="form-know">
        <label htmlFor="know">Como nos conheceu</label>
        <select
          name="know"
          value={know}
          onChange={e => setKnow(e.target.value)}
        >
          <option value="Select">Selecione</option>
          <option value="Tv">Tv</option>
          <option value="Internet">Internet</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      <div className="form-social">
        <label htmlFor="socialNetwork">Possui rede social?</label>
        <input
          type="radio"
          name="socialNetwork"
          onClick={Ativar}
          value="true"
          onChange={e => setSocialNetwork(e.target.value)}
        />
        <label htmlFor="socialNetwork">Sim</label>
        <input
          type="radio"
          name="socialNetwork"
          onClick={Desativar}
          value="false"
          onChange={e => setSocialNetwork(e.target.value)}
        />
        <label htmlFor="socialNetwork">Não</label>
      </div>
      <div className="form-what">
        <label htmlFor="what">Quais:</label>
        <input
          type="checkbox"
          name="what"
          value="Facebook"
          id="Facebook"
          onChange={e => setWhat(e.target.value)}
          disabled="disabled"
        />
        <label htmlFor="what">Facebook</label>
        <input
          type="checkbox"
          name="what"
          value="LinkedIn"
          id="LinkedIn"
          onChange={e => setWhat(e.target.value)}
          disabled="disabled"
        />
        <label htmlFor="what">LinkedIn</label>
        <input
          type="checkbox"
          name="what"
          value="Instagram"
          id="Instagram"
          onChange={e => setWhat(e.target.value)}
          disabled="disabled"
        />
        <label htmlFor="what">Instagram</label>
      </div>

      <button type="submit" id="enviar">
        Enviar
      </button>
    </form>
  );
}

export default App;
