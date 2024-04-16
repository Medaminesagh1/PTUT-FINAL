<template>
    <div class="login-page">
      <div class="form">
        <form @submit.prevent="login" v-show="!registerFormVisible">
          <input type="text" v-model="username" placeholder="Username" required>
          <input type="password" v-model="password" placeholder="Password" required>
          <button type="submit">Login</button>
          <p class="message">Not registered? <a @click="toggleForm">Create an account</a></p>
        </form>
        <form @submit.prevent="register" v-show="registerFormVisible">
          <input type="text" v-model="name" placeholder="Name" required>
          <input type="text" v-model="email" placeholder="Email Address" required>
          <input type="password" v-model="password" placeholder="Password" required>
          <button type="submit">Create</button>
         
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        name: '',
        email: '',
        registerFormVisible: false,
        error: ''
      };
    },
    methods: {
      login() {
        // responsable d'etude
        if (this.username === 'Deffosez' && this.password === '123') {
          // responsble de stage
          this.$router.push('/intervenants');
        } else if (this.username === 'Bastide' && this.password === '123') {
          // resonsable apprentisssage
          this.$router.push('/ResponsablesStages');
        } else if (this.username === 'Faux' && this.password === '123') {
          // responsble projet
          this.$router.push('/ResponsablesProjets');
        } else if (this.username === 'Pecatte' && this.password === '123') {
          // responsable d'année
          this.$router.push('/ResponsablesAnnee');
        } else if (this.username === 'Singer' && this.password === '123') {
          // intervenants
          this.$router.push('/intervenants');
        } else {
          // Identifiants incorrects
          this.error = 'Invalid username or password';
        }
      },
      register() {
        // Logique d'enregistrement
      },
      toggleForm() {
        this.registerFormVisible = !this.registerFormVisible;
        this.error = ''; // Réinitialiser les erreurs lors du basculement du formulaire
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #00a799;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover,.form button:active,.form button:focus {
    background: #00a799;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #02828b;
    text-decoration: none;
  }
  </style>
  