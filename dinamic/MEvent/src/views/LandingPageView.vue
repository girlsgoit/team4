<template>
    <!-- <Calendar/> -->
        <div class="titleContainer">
            <!-- <ul >
                <li> -->
                  <p class="p1">Make</p>
                  <p class="p2">Your</p>
                  <p class="p3">Own</p>
                  <p class="p4">Plan</p>
                <!-- </li>
            </ul> -->
        </div>
</template>


<script>
    import Calendar from '../components/Calendar.vue';
    export default {
        name: "LandingPageView",
        components: {
            Calendar
        }}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Montserrat&family=Poppins:wght@300;400;600&family=Satisfy&display=swap');


p{
    font-family: 'Satisfy', cursive;
    position: relative;
    color: #6F4B68;
    font-size: 150px;
    padding-left: 70px;
    padding-right: 70px;
    text-align: right;
    font-weight: bold;
    line-height: 2px;
}
.p1, .p3{
    margin-right: 25%;
}
.p2, .p4{
    margin-right: 5%;
}
</style>