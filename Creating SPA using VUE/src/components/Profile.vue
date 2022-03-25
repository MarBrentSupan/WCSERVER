<template>
<!--
  NAME: MAR BRENT SUPAN
  SECTION: WD-201
  -->
  <div id="profile">
      <div class="alert alert-secondary" role="alert">
    <form>
      <br />
      <h1>{{ title }}</h1>
      <p>Mar Brent Bondoc Supan</p>

      <h2>{{ crs }}</h2>
      <p>Bachelor of Science In Information Technology</p>

      <h2>{{ major }}</h2>
      <p>Web Development</p>

      <h2>{{ msg }}</h2>
      <p>To work a company that can meet up my need and wants</p>
      <p>To get experience and get a lot of knowledge</p>
      <p>To open my own Company and start a business</p>

      <h2>{{ birthdate }}</h2>
      <p>June 21, 2002</p>

      <h2>{{ age }}</h2>
      <p>19 years old</p>

      <h2>{{ sex }}</h2>
      <p>Male</p>
    </form>
    </div>

 
  </div>
</template>

<script>
export default {
  name: "profile",

  data() {
    return {
      title: "PERSONAL INFORMATION",
      crs: "Course",
      major: "Specialization",
      msg: "Objective",
      birthdate: "Date of Birth",
      age: "Age",
      sex: "Gender",
    };
  },
};
</script>