import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const ListeDeRecettes = () => {
  const [recettes, setRecettes] = useState([]);
  const [favoris, setFavoris] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then(res => {
        const data = res.data.meals;
        setRecettes(data);
      });
  }, []);

  useEffect(() => {
    const favorisLocalStorage = JSON.parse(localStorage.getItem("favoris")) || [];
    setFavoris(favorisLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris));
  }, [favoris]);

  const toggleFavori = (id) => {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((favori) => favori !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  };


  return (
    <div>
      <h1 className="text-center">Liste des recettes</h1>
      <Link className="btn btn-primary" to={`/formulaire`}>Ajouter une recette</Link>
      <div className='table'>
        {recettes.map(recette => (
          <div className='card' key={recette.idMeal}> 
            <img style={{width:250, height: 250}} src={recette.strMealThumb} alt={recette.strMeal}/> 
            <h2 className='name'>{recette.strMeal}</h2> 
            <Link to={`/recette/${recette.idMeal}`} className='btn btn-warning'>Voir plus...</Link>
            <button className='star-button' onClick={() => toggleFavori(recette.idMeal)}>
              <FaStar color={favoris.includes(recette.idMeal) ? "gold" : "gray"} size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListeDeRecettes;
