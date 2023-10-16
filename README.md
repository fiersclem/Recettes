Projet Recettes de cuisine!

Ce projet a été réalisé avec le framework React.js. L'objectif était de créer un site avec une liste de recettes de cuisine, un formulaire pour ajouter des recettes, un système d'authentification et un système de favoris.

Structure du Projet!

Pour ce projet, j'ai choisi d'utiliser le fichier App.js comme page principale, qui appellera progressivement tous les composants pour compléter la page.

Dans le dossier components, vous trouverez quatre composants pour les différentes interactions possibles sur le site :
Authentification.js : Permet d'afficher une page de connexion dès l'arrivée sur le site.
ListeDeRecettes.js : Affiche la liste des recettes une fois la connexion effectuée.
RecetteDetails.js : Affiche les détails de la recette si l'utilisateur clique sur le bouton "Voir plus...".
Formulaire.js : Permet d'ajouter une nouvelle recette à la liste, laquelle sera stockée dans le localStorage.

Lorsque l'utilisateur est connecté, le site propose également la possibilité de mettre une recette en favoris en cliquant sur l'étoile située en dessous du bouton "Voir plus...". Ces favoris sont également stockés dans le localStorage.

