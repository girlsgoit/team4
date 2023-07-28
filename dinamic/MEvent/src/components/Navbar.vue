<template>
  <header>
        <img class="logo" src="../assets/logo.png" alt="MEvent | SAVY entertaiment" />
      <nav>
        <ul class="nav_links">
            <router-link to="/tasks"><li class="color">My Task</li></router-link>
            <router-link to="/my-events"><li class="color">My Events</li></router-link>
        </ul>
      </nav>
      <a class="cta" href="#"><button>Log Out</button></a>
    </header >
    <section>

    </section>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li, .color, button{
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #633567;
    text-decoration: none;}
body{
    font-family: 'Courier New', Courier, monospace;
}
.color:hover{
    text-decoration: none;
}

body {
    font-family: 'Courier New', Courier, monospace;
}

a:hover {
    text-decoration: none;
}

header {
    position: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px;
    background: #efd7f1;
    height: 90px;
}

header ul {
    list-style: none;
    display: flex;
}

header li {
    margin: 0px 5px;
    list-style: none;
}
header .color{
    color:rgb(79, 37, 79);
}
header .color:hover{
    color: rgb(146, 110, 179);
}

.logo {
    cursor: pointer;
    margin-right: auto;
    height: 92px;
    width: auto;
    margin-left: 100px;
}

.nav_links li {
    display: inline-block;
    padding: 0px 20px;
}
.nav_links li .color{
    transition: all 0.3s ease 0s;
    margin-right: 10px;

}
.nav_links li .color :hover{
  color: rgb(143, 98, 183);}
button{
    padding: 9px 25px;
    background-color: rgba(189, 150, 190, 0.6);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    margin-right: 20px;
}

button :hover {
    background-color: rgba(189, 150, 190, 0.6);
}</style>