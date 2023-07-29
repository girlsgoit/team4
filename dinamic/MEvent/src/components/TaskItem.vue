<template>
    <li class="List">
        <input type="checkbox" v-model="this.completed"/>
        <span class="task">{{this.title}}</span>
        <i class="uil uil-times"></i>
        <input type="date" class="date" :value="this.data" disabled/>
    </li>
</template>

<script>
export default {
    name: "MyEventsItem",
    props: {
        id:"",
        title: "",
        data: "",
        completed: Boolean
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