<template>
    <div class="container">
      <form id="contact" @submit.prevent="ajouterEntree">
        <h3 class="title">Ajouter Un Nouvau Intervenant</h3>
        <fieldset class="center">
          <input placeholder="Nom intervenant" type="text" v-model="nouvelleEntree.Nom" required>
        </fieldset>
        <fieldset class="center">
          <input placeholder="Unité" type="text" v-model="nouvelleEntree.unite" required>
        </fieldset>
        <fieldset class="center">
          <input placeholder="Heure CM" type="number" v-model="nouvelleEntree.heureCM" required>
        </fieldset>
        <fieldset class="center">
          <input placeholder="Heure TD" type="number" v-model="nouvelleEntree.heureTD" required>
        </fieldset>
        <fieldset class="center">
          <input placeholder="Heure TP" type="number" v-model="nouvelleEntree.heureTP" required>
        </fieldset>
        <fieldset class="center">
          <input placeholder="Heure Totale" type="number" v-model="nouvelleEntree.heureTotale" required>
        </fieldset>
        <fieldset class="center">
          <input placeholder="Equivalent TD" type="number" v-model="nouvelleEntree.equivalentTD" required>
        </fieldset>
        <fieldset class="center">
          <button type="submit" name="submit" id="contact-submit" data-submit="...Sending">Ajouter</button>
        </fieldset>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nouvelleEntree: {
          Nom: '',
          unite: '',
          heureCM: null,
          heureTD: null,
          heureTP: null,
          heureTotale: null,
          equivalentTD: null
        }
      };
    },
    methods: {
      ajouterEntree() {
        // Vous pouvez envoyer les données de la nouvelle entrée vers le serveur ici
        console.log('Nouvelle entrée:', this.nouvelleEntree);
        
        // Réinitialisation du formulaire après l'ajout
        this.nouvelleEntree = {
            Nom : '',
          unite: '',
          heureCM: null,
          heureTD: null,
          heureTP: null,
          heureTotale: null,
          equivalentTD: null
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .title {
  text-align: center; /* Centrer le texte */
  color: #0092ac; /* Changer la couleur du texte */
}
  /* Copiez-collez ici le code CSS fourni */
  .container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .center {
  text-align: center; /* Centrer le contenu */
}
  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea,
  #contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }
  
  #contact {
    background: #F9F9F9;
    padding: 25px;
    margin: 150px 0;
    box-shadow: 0 0 20px 0 rgba(1, 115, 143, 0.61), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  
  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  
  #contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
  }
  
  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }
  
  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }
  
  #contact input[type="text"]:hover,
  #contact input[type="email"]:hover,
  #contact input[type="tel"]:hover,
  #contact input[type="url"]:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }
  
  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }
  
  #contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #019cb8;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }
  
  #contact button[type="submit"]:hover {
    background: #6febe0;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
  
  #contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }
  
  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }
  
  ::-webkit-input-placeholder {
    color: #888;
  }
  
  :-moz-placeholder {
    color: #888;
  }
  
  ::-moz-placeholder {
    color: #888;
  }
  
  :-ms-input-placeholder {
    color: #888;
  }
  </style>
  