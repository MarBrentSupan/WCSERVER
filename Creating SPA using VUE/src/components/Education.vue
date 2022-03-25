<template>
<!--
  NAME: MAR BRENT SUPAN
  SECTION: WD-201
  -->
    <div id=education>
    <div class="alert alert-primary" role="alert">
    <form>
        <br/>
        <h1>{{ title }}</h1>

        <h2>{{ schl1 }}</h2>
        <p>San Juan Elementary School, Concepcion, Tarlac</p>
        <p>Alfonso Elementary School, Concepcion, Tarlac</p>
        <p>Good Shepherd Christian School, Concepcion, Tarlac</p>

        <h2>{{ schl2 }}</h2>
        <p>Benigno S. Aquino National High School, Concepcion Tarlac</p>

        <h2>{{ schl3 }}</h2>
        <p>Benigno S. Aquino National High School, Concepcion Tarlac</p>

        <h2>{{ schl4 }}</h2>
        <p>Holy Angel University</p>
    </form>
    </div>
    </div>
</template>

<script>
export default {
    name: 'education',

    data(){
        return {
            title: 'EDUCATION RECORD',
            schl1: 'Elementary School',
            schl2: 'Junior High School',
            schl3: 'Senior High School',
            schl4: 'College'
        };
    },
};
</script>