<template>
    <div>
        <Login/>
    </div>
</template>


<script>
import Login from "../components/Login.vue"
export default {
    name: "LoginView",
    components: {
        Login
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