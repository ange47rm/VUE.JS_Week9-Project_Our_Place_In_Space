<template>
    <div>
        <form v-on:submit.prevent="handleDateSubmit">
            <label for="image_date">Search images by a specific date</label>
            <input class="date" type="date" id="image_date" name="image_date" v-model="date_selected_form">
            <input class='submit' type="submit">
        </form> 
    </div>
  
</template>

<script>
import { APIkey } from '../assets/APOD-API-Key';
import { eventBus } from '../main.js';
export default {
    name: 'date-form',
    data() {
        return{
            date_selected_form: null,
            picOfTheDate: null
        }
    },

    methods: {
        handleDateSubmit(){
            fetch (`https://api.nasa.gov/planetary/apod?api_key=${APIkey}&date=${this.date_selected_form}`)
            .then ( res => res.json())
            .then ((picOfTheDate) => {
                this.picOfTheDate = picOfTheDate
                eventBus.$emit("date-selected", this.picOfTheDate)
                eventBus.$emit("date-test", this.picOfTheDate.date)
            })

            





        }
    }  
}

</script>

<style>

</style>