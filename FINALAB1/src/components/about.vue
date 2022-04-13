<template>
<div class="about">
  <h1><center>{{ title }}</center></h1>
  <img src="./image/brent.jpg">
  <h3>Mar Brent B. Supan</h3>
  <p>I'm a Student from School of Computing and Im a BSIT student major in Web Development</p>
</div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return {
      title: 'About Me'
    }
  }
}
</script>
<style scoped>
img {
    width: 20%;
    
}
</style>