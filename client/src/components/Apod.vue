<template>
  <div id='apod'>
    <date-form></date-form>
      
      
      <div id="caption-picture">
        <img class="apod-image" v-if="picOfTheDay" :src="picOfTheDay.url">
        <section>
        <h2 v-if="picOfTheDay"> {{picOfTheDay.title}} </h2>
        <h3 v-if="picOfTheDay"> Selected date: {{picOfTheDay.date}}</h3>
        <p class="component-text" v-if="picOfTheDay"> {{picOfTheDay.explanation}}</p>
        <p v-if='picOfTheDay.copyright'> Photography Copyright: {{picOfTheDay.copyright}} </p>
        </section>
      </div>

  </div>
</template>

<script>
import { APIkey } from '../assets/APOD-API-Key';
import { eventBus } from '../main.js';
import DateForm from './DateForm.vue';

export default {
    name: 'apod',
    components: {
      'date-form': DateForm
    },
    data () {
      return {
        picOfTheDay: undefined
      }
    },

    mounted () {
      this.getApod()

      eventBus.$on("date-selected", (payload) => this.picOfTheDay = payload)

    },
    
    methods: {
        getApod: function(){
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
            .then(res => res.json())
            .then(data => this.picOfTheDay = data)
            
            },
    }
}
    


</script>


<style>

#caption-picture {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.apod-image {
  width: 50%;
  height: 50%;
  max-width: 1000px;
  max-height: 1000px;
}





</style>