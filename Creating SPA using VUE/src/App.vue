<template>
<!--
  NAME: MAR BRENT SUPAN
  SECTION: WD-201
  -->
  <div id="app">
    <h1>{{ msg }}</h1>
    <profile></profile>
    <education></education>
    <skills></skills>



  </div>

</template>

<script>
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills.vue'
export default {
  name: 'app',
  components: {
    Profile,
    Education,
    Skills,
  },
  data() {
    return {
      msg: 'The Main Component',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
