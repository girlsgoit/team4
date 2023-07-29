<template>
    <div>
        <h2>hello</h2>
    </div>





</template>


<script>
export default {
    name: "MyEventsItem",
    data: function () {
        return {
            
            events: [
                { id: 1, title: 'event', location: "Chisinau", date: "date sample", time: "time" },
                { id: 2, title: 'event', location: "Chisinau",date: "date sample", time: "time"  },
                { id: 3, title: 'event', location: "Chisinau",date: "date sample", time: "time"  }
            ,  { id: 4, title: 'event', location: "Chisinau",date: "date sample", time: "time"  }]
        }
    }
}
</script>

<style scoped></style>