<template>

  <div id=main>
    <h1>Astronomy Picture Of the Day</h1>
    <apod></apod>
    <h1>Mars Rover Photos</h1>
    <mars></mars>
    <epic-image/>
  </div>

</template>

<script>

import Mars from './components/Mars.vue';
import Apod from './components/Apod.vue';
import DateForm from './components/DateForm.vue';

export default {
  name: 'app',
  components: {
    'mars' : Mars,
    'apod' : Apod,
    'date-form' : DateForm
  },
}

</script>


<style>

h1 {
  font-size:6vw;
}

input, button {
  font-family: 'Cardo', serif;
  font-family: 'Righteous', cursive;
  background-color: #010014;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
}

.date {
  margin: 20px;
}

#main {
  background-color: #010014;
  /* background-image: url(assets/starrysky1.jpg); */
  color: white;
  text-align: center;
  padding: 50px;
  font-family: 'Cardo', serif;
  font-family: 'Righteous', cursive;
}

.component-text {
  text-align: justify;
  line-height: 2;
  font-size:1vw;
  padding-left: 50px;
  padding-right: 50px;
}

</style>