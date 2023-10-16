import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulaire = () => {
  const navigate = useNavigate();

  const [nomRecette, setNomRecette] = useState("");
  const [descriptionRecette, setDescriptionRecette] = useState("");

  const handleNomChange = (e) => {
    setNomRecette(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionRecette(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const nouvelleRecette = {
      id: Date.now(),
      nom: nomRecette,
      description: descriptionRecette,
    };

    const recettes = JSON.parse(localStorage.getItem("recettes")) || [];
    recettes.push(nouvelleRecette);
    localStorage.setItem("recettes", JSON.stringify(recettes));

    setNomRecette("");
    setDescriptionRecette("");

    navigate("/");
  };

  return (
    <div className="formulaire">
      <h2>Ajouter une nouvelle recette</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom de la recette:
          <input type="text" value={nomRecette} onChange={handleNomChange} required />
        </label>
        <label>
          Description de la recette:
          <textarea value={descriptionRecette} onChange={handleDescriptionChange} required />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default Formulaire;
