<template>
  <nav>
    <div class="dot"></div>
    <ul>
      <li><router-link to="/ResponsablesAnnee">Responsable d'années</router-link></li>
        <li><router-link to="/intervenants">Intervenants</router-link></li>
        <li><router-link to="/ResponsablesProjets">Projet</router-link></li>
        <li><router-link to="/ResponsablesStages">Stage</router-link></li>
        <li><router-link to="/ResponsablesApprentissages">Apprentissage</router-link></li>

    </ul>
  </nav>
  <div classs="conainer">
  <div class="image-container">
        <img src="../assets/teacher 1.png" alt="Teacher Image">
      </div>
    <div class="table-container" >
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Unité</th>
            <th>Heure CM</th>
            <th>Heure TD</th>
            <th>Heure TP</th>
            <th>Heure Totale</th>
            <th>Equivalent TD</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="row in rows">
            <tr @click="toggle(row.id)" :class="{ opened: opened.includes(row.id) }">
              <td>{{ row.id }}</td>
              <td>{{ row.name }}</td>
              <td>{{ row.column3 }}</td>
              <td>{{ row.column4 }}</td>
              <td>{{ row.column5 }}</td>
              <td>{{ row.column6 }}</td>
              <td>{{ row.column7 }}</td>
            </tr>
            <tr v-if="opened.includes(row.id)">
              <td colspan="8" class="sub-row">Matières :</td>
            </tr>
            <tr v-if="opened.includes(row.id)">
              <td colspan="2">{{ row.matiere1 }}</td>
              <td>{{ row.column9 }}</td>
              <td>{{ row.column10 }}</td>
              <td>{{ row.column11 }}</td>
              <td>{{ row.column12 }}</td>
              <td>{{ row.column13 }}</td>
            </tr>
            <tr v-if="opened.includes(row.id)">
              <td colspan="2">{{ row.matiere2 }}</td>
              <td>{{ row.column9 }}</td>
              <td>{{ row.column10 }}</td>
              <td>{{ row.column11 }}</td>
              <td>{{ row.column12 }}</td>
              <td>{{ row.column13 }}</td>
            </tr>
            <tr v-if="opened.includes(row.id)">
              <td colspan="2">{{ row.matiere3 }}</td>
              <td>{{ row.column9 }}</td>
              <td>{{ row.column10 }}</td>
              <td>{{ row.column11 }}</td>
              <td>{{ row.column12 }}</td>
              <td>{{ row.column13 }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div> 
      <div class="table-containersmall" >
        <div class="small-table-container">
        <table class="small-table table-striped table-hover">
          <thead>
          <tr>
            <th></th>
           
            <th>Heure CM</th>
            <th>Heure TD</th>
            <th>Heure TP</th>
            <th>Heure Totale</th>
            <th>Equivalent TD</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="row in items">
            <tr   @click="toggle(row.id)" :class="{ opened: opened.includes(row.id) }">
         
              
              <td>{{ row.name }}</td>
              <td>{{ row.column3 }}</td>
              <td>{{ row.column4 }}</td>
              <td>{{ row.column5 }}</td>
              <td>{{ row.column6 }}</td>
              <td>{{ row.column7 }}</td>
            </tr>
      
          </template>
        </tbody>
      </table>
    </div> 
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  
    data() {
      return {
        opened: [],
        rows: [
        
          { id: 2, name: 'Unité d"enseignement super cool',  column3: 'X',column4: 'X', column5: 'X', column6: 'X' , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          { id: 3, name: 'Unité d"enseignement super cool',   column3: 'X',column4: 'X', column5: 'X', column6: 'X'  , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          { id: 4, name: 'Unité d"enseignement super cool',   column3: 'X', column4: 'X', column5: 'X', column6: 'X'  , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          { id: 5, name: 'Unité d"enseignement super cool',   column3: 'X', column4: 'X', column5: 'X', column6: 'X'  , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          { id: 6, name: 'Unité d"enseignement super cool',   column3: 'X', column4: 'X', column5: 'X', column6: 'X'  , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          { id: 7, name: 'Unité d"enseignement super cool',  column3: 'X',  column4: 'X', column5: 'X', column6: 'X' , column7: 'X' ,matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          { id: 8, name: 'Unité d"enseignement super cool',   column3: 'X', column4: 'X', column5: 'X', column6: 'X' , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X' }
        ] ,
        items: [
        
          {  name: 'Sous Totale Cours',  column3: 'X',column4: 'X', column5: 'X', column6: 'X' , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          {  name: 'Sous Totale Ptut',   column3: 'X',column4: 'X', column5: 'X', column6: 'X'  , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
          {  name: 'Total',   column3: 'X', column4: 'X', column5: 'X', column6: 'X'  , column7: 'X',matiere1 : 'matiere1',matiere2 : 'matiere2',matiere3 : 'matiere3' , column8: 'X', column9: 'X', column10: 'X', column11: 'X', column12: 'X', column13: 'X', column14: 'X'},
       
        ]
      };
    },
    methods: {
      toggle(id) {
        const index = this.opened.indexOf(id);
        if (index > -1) {
          this.opened.splice(index, 1);
        } else {
          this.opened.push(id);
        }
      }
    }
  };
  
  </script>
  
  
  
  
  <style scoped>
  
  
  
    .table-container {
      margin-top: 70px; /* Ajoutez une marge supérieure au conteneur du tableau */
      text-align: center;
      top: 80%;
      margin-right: 20px; 
    }
    .table-containersmall {
      margin-top: 50px; /* Ajoutez une marge supérieure au conteneur du tableau */
    
      top: 80%;
      margin-right: 20px; 
    }
    table {
      max-width: 100%;
      border: 1px solid #019e96;
    }
  
    th, td {
      padding: 8px;
      text-align: left;
    }
  
    th {
      background-color: #019e96;
      color: white;
    }
  
    .sub-row {
      background-color: #f0f0f0;
      font-weight: bold;
    }
  body {
    font-family: 'Raleway', sans-serif;
    background-image: radial-gradient(circle at center, #899Dc4, #495D84);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(ellipse at bottom, #1b2735, #090a0f);
    font-weight: 300;
  }
  .all {
    display: flex;
    perspective: 10px;
    transform: perspective(300px) rotateX(20deg);
    will-change: perspective;
    perspective-origin: center center;
    transition: all 1.3s ease-out;
    justify-content: center;
    transform-style: preserve-3d;
  }
  .all:hover {
    perspective: 1000px;
    transition: all 1.3s ease-in;
    transform: perspective(10000px) rotateX(0deg);
    .text {
      opacity: 1;
    }
    & > div {
      opacity: 1;
      transition-delay: 0s;
    }
    .explainer {
      opacity: 0;
    }
  }
  
  .left, .center, .right, .lefter, .righter {
    width: 200px;
    height: 30px;
    transform-style: preserve-3d;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 0 0 20px 5px rgba(100, 100, 255, .4);
    opacity: 0;
    transition: all .3s ease;
    transition-delay: 1s;
    position: relative;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: rgb(33, 160, 192);
    cursor: pointer;
    background-blend-mode: color-burn;
    
    &:hover {
      top: 20%;
    
    text-align: center;
  
      box-shadow: 0 0 30px 10px rgba(100, 100, 255, .6);
    background-color: #ccf;
    }
  }
  .text {
    transform: translateY(30px);
    opacity: 0;
    transition: all .3s ease;
    bottom: 0;
    left: 5px;
    position: absolute;
    will-change: transform;
    color: #fff;
    text-shadow: 0 0 5px rgba(100, 100, 255, .6)
  }
  .lefter {
    transform: translateX(-60px) translateZ(-50px) rotateY(-10deg);
  
  }
  .left {
    transform: translateX(-30px) translateZ(-25px) rotateY(-5deg);
  
  }
  .center {
    opacity: 1;
    background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/app_window-512.png);
  }
  .right {
    transform: translateX(30px) translateZ(-25px) rotateY(5deg);
    background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/cloud_weather-512.png);
  }
  .righter {
    transform: translateX(60px) translateZ(-50px) rotateY(10deg);
    background-image: url(https://cdn3.iconfinder.com/data/icons/other-icons/48/search-512.png);
  }
  .explainer {
    font-weight: 300;
    font-size: 2rem;
    color: #fff;
    transition: all .6s ease;
    width: 100%;
    height: 100%;
    background-color: #303050;
    background-image: radial-gradient(circle at center top, #cce, #33a);
    border-radius: 10px;
    text-shadow: 0 0 10px rgba(255, 255, 255, .8);
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .ref {
    background-color: #000;
    background-image: linear-gradient(to bottom, #d80, #c00);
    border-radius: 3px;
    padding: 7px 10px;
    position: absolute;
    font-size: 16px;
    bottom: 10px;
    right: 10px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 0 3px rgba(0, 0, 0, .4);
    &::first-letter {
      font-size: 12px;
    }
  }
  .navbar {
    background-color: #01857e;
    padding: 10px 20px;
  }
  
  .navbar-brand a {
    color: #fff;
    font-weight: bold;
  }
  
  .navbar-menu {
    display: flex;
    justify-content: space-between;
  }
  
  .navbar-item {
    color: #fff;
    margin-right: 10px;
  }
  
  .input {
    margin-right: 5px;
  }
  
  .button {
    margin-left: 5px;
  }
  table {
      top: 20%;
    
    text-align: center;
    max-width: 100%;
    width: 100%;
    border: 1px solid #019e96;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #01aaa2;
    color: white;
  }
  nav {
    position: fixed;
    top: 5%; /* Ajoutez une marge supérieure pour dégager de l'espace */
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
  }
  
  .image-container {
    text-align: center;
    margin-top: 100px; /* Ajoutez une marge supérieure à l'image */
  }
  
  .image-container img {
    max-width: 100%;
  }
  .sub-row {
    background-color: #f0f0f0;
    font-weight: bold;
  }
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400);
  
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body{
    font-family: 'Source Sans Pro', sans-serif;
    background-color: rgb(230, 233, 236);
  }
  
  nav{
    position: fixed;
    top: 5%;
    left: 50%;
    width: 100%;
    text-align: center;
    
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    
    &:after {
      content:"";
      display:table;
      clear:both;
    }
    
    ul{
      li{
        list-style: none;
        display: inline-block;
        oveflow: hidden;
        
        a{
          display: block;
          padding: 10px 40px;
          text-decoration: none;
          font-size: 18px;
          position: relative;
          color: fade(white, 80%);
          transform: translateX(-15%);
          border-radius: 50px;
          width: 130%;
          text-align: center;
          transition-duration: 0.25s;
          
          &:hover{
            color: white;
          }
        }
        
        &.active{
          a{
            color: white;
          }
        }
        
        &:nth-child(1){
          a{
            background-color:#008c84;
          }
        }
        
        &:nth-child(2n){
          a{
            background-color: #007671;
          }
        }
        
        &:nth-child(3n){
          a{
            background-color: #00b5ad;
          }
        }
        
        &:nth-child(4n){
          a{
            background-color: #00d8cd;
          }
        }
        
        &:nth-child(5n){
          a{
            background-color: #04f5e9;
          }
        }
      }
    }
    
    .dot{
      background-color: red;
      width: 6px;
      height: 6px;
      position: absolute;
      bottom: -20px;
      left: 0;
      border-radius: 50%;
      transition-duration: 0.5s;
    }
  }
  .small-table-container {
    float: right; /* Aligner à droite */
    width: 60%; /* Largeur souhaitée */
  }
  
  /* Styles de votre tableau */
  .small-table {
    width: 100%;
  }
  
  /* Styles spécifiques aux colonnes */
  th, td {
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #12a79f;
    color: white;
  }
  </style>
  