<template>
<!--
  NAME: MAR BRENT SUPAN
  SECTION: WD-201
  -->
    <div id=skills>
        <div class="alert alert-warning" role="alert">
    <form>
        <br/>
        <h1>{{ title }}</h1>
        
        <h2>{{ msg }}</h2>
        <p>Digital Artist</p>

        <h2>{{ msg1 }}</h2>
        <p>Java</p>
        <p>Python</p>
        <p>HTML</p>
        <p>Javascript</p>

    </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'skills',

    data(){
        return {
            title: 'SKILL RECORD',
            msg: 'Talent',
            msg1: 'Programming Language',
        };
    },
};
</script>