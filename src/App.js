import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ListeDeRecettes from "./components/ListeDeRecettes";
import RecetteDetails from "./components/RecetteDetails";
import Formulaire from "./components/Formulaire";
import Authentification from "./components/Authentification";
import './App.css';


const App = () => {

  const [estConnecte, setEstConnecte] = useState(false);

  const handleLogin = (connecte) => {
    setEstConnecte(connecte);
  };

  return (
    <Router>
      <Routes>
        <Route
            path="/authentification"
            element={<Authentification onLogin={handleLogin} />}
          />
          {estConnecte ? (
            <>
              <Route path="/" element={<ListeDeRecettes />} />
              <Route path="/recette/:id" element={<RecetteDetails />} />
              <Route path="/formulaire" element={<Formulaire />} />
            </>
          ) : (
            <Route
              path="/"
              element={<Navigate to="/authentification" />}
            />
          )}
        </Routes>
    </Router>
  );
}

export default App;
