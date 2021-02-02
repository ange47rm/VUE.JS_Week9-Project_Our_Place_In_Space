<template>
<div id = "marsmain">
  <h3>Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars</h3>
  <mars-date-item ></mars-date-item>

<div id ="caption-picture">
  <div id="marscap">
  <p class="component-text">Earth date: {{marsPhotos[0].earth_date}}</p>
  <p class="component-text">Mars sol: {{marsPhotos[0].sol}}</p>
  <p class="component-text">Rover name: {{marsPhotos[0].rover.name}}</p>
  <p class="component-text">Landing date: {{marsPhotos[0].rover.landing_date}}</p>
  <p class="component-text">Launch date: {{marsPhotos[0].rover.launch_date}}</p>
  <p class="component-text">Rover status: {{marsPhotos[0].rover.status}}</p>
  </div>
  <img class="mars-image" v-if="marsPhotos" :src="marsPhotos[0].img_src">
</div>
</div>


</template>

<script>

import { APIkey } from '@/assets/MARS_API_KEY'
import MarsDateItem from './MarsDateItem.vue'
import { eventBus } from '../main.js';


export default {
  components: { 
    'mars-date-item': MarsDateItem
  },

  name: 'mars', 
  data() {
    return {
    marsPhotos: [],
    }
  },

  mounted () {
    this.getPhotos()
    
    eventBus.$on('selected-date', (payload) => this.marsPhotos = payload)

  },

  methods: {
    getPhotos: function(){
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${APIkey}&page=1`)
      .then( res => res.json())
      .then (data => this.marsPhotos = data.latest_photos)
    },
  }

}
</script>


<style>

 .mars-image {
  width: 50%;
  height: 50%;
  max-width: 1000px;
  max-height: 1000px;
}

</style>