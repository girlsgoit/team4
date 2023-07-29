<template>
    <div>
    <input class="block" placeholder=" eventname" required disabled>
    <input class="block" placeholder=" location" required disabled>
    <!-- <label for="start"></label> -->
    <input type="time" id="appt" name="appt" required disabled>
    <input type="date" id="start" name="trip-start" value="2023-01-01" min="2023-01-01" max="2024-12-31"
        required disabled>
        </div>

</template>


<script>
     export default {
        // name: "MyEventsItem",
        props:{
            title: String,
            location: String,
            date: String,
            time:String
        }
    }

</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>