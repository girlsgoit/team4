<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"

</script>

<template>
  <Navbar/>


  <RouterView />
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
