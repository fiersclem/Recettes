import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const RecetteDetails = () => {
  const [recette, setRecette] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => {
        const data = res.data.meals[0];
        setRecette(data);
        console.log(data);
      })
  }, [id]);

  if (!recette) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <h2 className="text-center">{recette.strMeal}</h2>
      <div className='details'>
        <img style={{ width: 350, height: 350 }} src={recette.strMealThumb} alt={recette.strMeal} />
        <p className="detail">{recette.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecetteDetails;
