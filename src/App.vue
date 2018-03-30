<template>
  <div id="app">
    <div class="nav">
      <div class="links">
        <router-link v-for="(route, index) in routes" :to="route.path" :key="index">{{ route.name }}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import { routes } from './router';

  export default {
    name: 'App',
    data: function () {
      return {
        routes,
      }
    },
  };

</script>

<style>

  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100vh;
    background: radial-gradient(ellipse at center, #feffff 0%, #d7e5e3 100%);
  }
  button {
    background: #3498db;
    background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
    background-image: -moz-linear-gradient(top, #3498db, #2980b9);
    background-image: -ms-linear-gradient(top, #3498db, #2980b9);
    background-image: -o-linear-gradient(top, #3498db, #2980b9);
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    font-family: Arial;
    color: #ffffff;
    cursor: pointer;
    font-size: 15px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    margin: 0 10px;
  }

  button:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
</style>

<style scoped>

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background: rgba(0, 0, 0, 0.1);
  }

  .nav a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-decoration: none;
  }

  .nav a.router-link-exact-active {
    color: #353635;
    background: #b4c2c0;
    transition: all .2s ease-in;
  }

  .nav a:hover {
    color: rgba(53, 112, 131, 0.99);
  }

  .links {
    position: relative;
    display: flex;
    height: 100%;
  }
</style>
