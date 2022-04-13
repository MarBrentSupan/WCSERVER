<template>
<div class="gallery">
  <h1><center>{{ title }}</center></h1>

  <img src="./image/Self portrait.png">
  <img src="./image/Dream.png">
  <img src="./image/Paraluman.png">
  <img src="./image/Vexel1.jpg">

  <router-view/>
  
</div>
</template>
<script>
export default {
  name: 'gallery',
  data(){
    return {
      title: 'Gallery'
    }
  }
}
</script>
<style scoped>
img{
    width: 20%;
}
</style>