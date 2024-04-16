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
  <h1 class="title">Responsable Projet</h1>
  <div class="image-container">
    <img src="../assets/classroom.png" alt="Teacher Image">
  </div>
  <div class="container">
 
  
  <div class="table-container">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Intervenant</th>
          <th>Heures</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>{{ row.intervenant }}</td>
          <td>{{ row.heures }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="form-container">
    <div class="form-group">
      <label for="intervenant">Intervenant:</label>
      <input type="text" v-model="newIntervenant" id="intervenant"/>
    </div>
    <div class="form-group">
      <label for="heures">Heures:</label>
      <input type="number" v-model="newHeures" id="heures" min="0"/>
    </div>
    <div class="form-group">
      <button @click="ajouterIntervenant">Ajouter</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { intervenant: 'John Doe', heures: 20 },
        { intervenant: 'Jane Smith', heures: 15 },
        { intervenant: 'Alice Johnson', heures: 25 }
      ],
      newIntervenant: '',
      newHeures: null
    };
  },
  methods: {
    ajouterIntervenant() {
      this.tableData.push({ intervenant: this.newIntervenant, heures: this.newHeures });
      this.newIntervenant = '';
      this.newHeures = null;
    }
  }
};
</script>



  
  <style scoped>
  .table-container {
  margin: 0 auto; /* Ajoutez cette ligne pour centrer le tableau horizontalement */
  margin-top: 180px; /* Ajoutez une marge supérieure au conteneur du tableau */
  width: 33%; /* Définissez la largeur du conteneur du tableau sur un tiers de l'écran */
  text-align: center;
}
.title {
position: relative; /* Assurez-vous que la position est relative pour que top fonctionne */
text-align: center;
top: 60px; /* Ajustez cette valeur selon votre besoin */
font-size: 30px;
text-shadow: 0 0 5px rgba(100, 100, 255, .6);
color: #024e61; /* Couleur du texte */

}
.image-container {
position: relative; /* Pour permettre le positionnement absolu de l'image */
text-align: center; /* Centrer horizontalement */
}

.image-container img {
position: absolute; /* Position absolue par rapport à son conteneur */
top: 100%; /* Centrer verticalement */
left: 50%; /* Centrer horizontalement */
transform: translate(-50%, -50%); /* Déplacer l'image de moitié de sa propre largeur et hauteur pour la centrer */
max-width: 100%;
margin-top: 100px; /* Ajoutez une marge supérieure à l'image */
}

  
    table {
      max-width: 100%;
      border: 1px solid #00cfbe;
    }
  
    th, td {
      padding: 8px;
      text-align: left;
    }
  
    th {
      background-color: #00d8cd;
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
    text-shadow: 0 0 5px rgba(100, 250, 255, 0.6);
  
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
  
  .container {
    margin-top: 180px; /* Ajoutez une marge supérieure au conteneur du tableau */
    text-align: center;
    top: 80%;
    margin-right: 20px; 
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
    border: 1px solid #00cfbe;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #01aaa2;
    color: white;
  }
  .image-container {
    text-align: center;
  }
  .image-container img {	position: fixed;
      top: 10%;
      
      text-align: center;
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
  .table-container {
margin-top: 20px;
text-align: center;
}

.form-container {
margin-top: 20px;
text-align: center;
}

.form-group {
margin-bottom: 10px;
}

.form-group label {
display: block;
}

.form-group input {
padding: 5px;
border-radius: 5px;
border: 1px solid #00a799;
margin-top: 5px;
}

.form-group button {
padding: 8px 20px;
border-radius: 5px;
border: none;
background-color: #00968e;
color: white;
cursor: pointer;
}

.form-group button:hover {
background-color: #01aaa2;
}
  </style>