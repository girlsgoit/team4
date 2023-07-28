<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
import Calendar from "./components/Calendar.vue"

export default {
    name: "LoginView",
    components: {
        Navbar,
        Calendar
    }

}
</script>

<template>
  <Navbar/>
  <Calendar/>


  <RouterView />
</template>

<style >
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
