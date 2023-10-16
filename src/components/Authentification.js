import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentification = ({ onLogin }) => {
  const navigate = useNavigate();
  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomUtilisateur === "admin" && motDePasse === "password") {
      onLogin(true);
      navigate("/");
    } else {
      setErreur("Nom d'utilisateur ou mot de passe incorrect.");
    }
  };

  return (
    <div className="authentification">
      <h2>Authentification</h2>
      <h6>(Le mot de passe est "password" et le nom d'utilisateur "admin")</h6>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur:
          <input type="text" value={nomUtilisateur} onChange={(e) => setNomUtilisateur(e.target.value)} required />
        </label>
        <label>
          Mot de passe:
          <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />
        </label>
        <button type="submit">Se connecter</button>
        {erreur && <div className="erreur">{erreur}</div>}
      </form>
    </div>
  );
};

export default Authentification;
