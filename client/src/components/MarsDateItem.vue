<template>
    <div id='date'>
        <form v-on:submit.prevent="handleDateSubmit">
            <label for="image_date">Search images by a specific date</label>
            <input class ="date" input type="date" id="image_date" name="image_date" v-model="selected_date">
            <input class ="submit" type="submit">
        </form> 
    </div>
            
            
            
            
</template>

<script>

import { APIkey } from '@/assets/MARS_API_KEY'
import { eventBus } from '../main.js';

export default {
    name: 'mars-date-item',

    data () {
        return {
            selected_date: null,
            datePic: null
        }
    },
    

    methods: {
      handleDateSubmit(){
      fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.selected_date}&api_key=${APIkey}`)
      .then( res => res.json())
      .then(data => {
          this.datePic = data.photos
          eventBus.$emit("selected-date", this.datePic)  
      })
}}}


</script>

<style>

</style>