<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
// import Calendar from "./components/Calendar.vue"

export default {
    name: "LoginView",
    components: {
        Navbar,
        // Calendar
    }

}
</script>

<template>
    <Navbar />
    <!-- <br>
  <br>
  <Calendar/> -->



    <RouterView />
</template>

<style  >
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
