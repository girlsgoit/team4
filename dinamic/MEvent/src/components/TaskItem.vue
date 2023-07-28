<template>
    {{ this.title }} 
    {{ this.data }}
</template>

<script>
    export default {
        name: "MyEventsItem",
        data: function () {
            return {
                titlu: "",
                data: "",
            }},
        props: {
            title: "",
            data: "",
        }
        }
        
</script>

<style scoped>

</style>