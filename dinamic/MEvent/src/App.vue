<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"

export default {
    name: "LoginView",
    components: {
        Navbar
    }

}
</script>

<template>
  <Navbar/>


  <RouterView />
</template>

<style >
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
