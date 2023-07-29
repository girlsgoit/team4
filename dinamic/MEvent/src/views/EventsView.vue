<template>
    <div class="body">
        <Calendar />
        <MyEventsList />
    </div>
    <!-- <MyEventsList/> -->
</template>


<script>
import  MyEventsList from '../components/MyEventsList.vue';
import Calendar from '../components/Calendar.vue';


export default {
    name: "TasksView",
    components: {
        MyEventsList,
        Calendar
    }
}
</script>

<style scoped>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul {list-style-type: none;}
.body {
    font-family: Verdana, sans-serif;
    margin: 0;
    padding: 0;
    height: 800px;
    width: 730px;
    margin: 100px 400px 0px 0px;
    background-color: #D5DFEA;
}


.month {
    padding: 70px 25px;
  background: #bd85b2;
  text-align: center;
  position: relative;
  object-fit: cover;
  border-radius: 40px 40px 0px 0px;
  margin: 0px 50px;
}


.month ul {
  margin: 0;
  padding: 0;
}

.month ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}


.month .prev {
  float: left;
  padding-top: 10px;
}


.month .next {
  float: right;
  padding-top: 10px;
}


.weekdays {
  margin: 0;
  padding: 10px 0;
  background-color:#ddd;
  margin: 0px 50px 0px 50px;
}

.weekdays li {
  display: inline-block;
  width: 13.6%;
  color: #666 !important;
  text-align: center;
  font-family: Lora;
}


.days {
  padding: 10px 0;
  background: #eee;
  background-size: cover;
  margin: 0px 50px;
  border-radius: 0px 0px 40px 40px;
  
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: 13.6%;
  text-align: center;
  margin-bottom: 5px;
  font-size:12px;
  color: #777;
  font-family: Lora;
  font-size: 17px;
}


.days li .active {
  padding: 5px;
}

.days h4{
    cursor: pointer;
}

.active {
    margin: 10px 33px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.m-button {
  cursor: pointer;
    border: medium none;
  background-image: none; 
  background: transparent;
  float: left;
  background-color: transparent;
  color: white;
  margin: -13px 150px;
  font-size: 20px;
  cursor: pointer;
}

.next{
    margin: -12px 5px; 
}
.mobile-button {
    border: medium none;
  background-image: none; 
  background: transparent;
  float: left;
  background-color: transparent;
  color: white;
  margin: -30px 217px;
  font-size: 12px;
  cursor: pointer;
}

.next-item{
    margin: -12px 135px;
}


.m-month{
    font-family: Display;
    margin: -30px 200px;
}

.grp-button{
    font-family: Display;
}

*{  margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}




*{  margin: auto;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.body{
    background-color: rgb(255, 255, 255);
}
.container {
    position: relative;
    max-width: 480px;
    width: 100%;
    border-radius: 0px;
    padding: 25px;
    margin: 85px auto 0;
    background-color: rgb(228, 188, 224);
    box-shadow: 0px 5px 10px rgba(218, 151, 151, 0.1);
   margin-top: -500px;
   margin-right: -650px;
}
.container .input-field{
    position: relative;
    width: 100%;
}
.input-field textarea{
    height: 70%;
    width: 98%;
    font-weight: 400;
    outline: none;
    border-radius: 0;
    border: 1px solid rgb(91, 33, 87);
    resize: none;
}
.input-field textarea:focus ~.note-icon{
    color: beige;}

textarea::-webkit-scrollbar {
    display: none;
}
.input-field .note-icon{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 24px;
    color: rgb(91, 33, 87);
    cursor: default;
}
.container .input-field{
   cursor: default;
}
.input-field .field{
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    background-color: rgb(187, 135, 178);
    padding: 20px 15px;
    border-radius: 0px;
    margin-top: 10px;
    cursor: default;
}
.date{
    position: absolute;
    margin: 0px 30px 0px 0px;
    padding: 20px 15px;
    border-radius: none;
    margin-top: 0px;
    margin-left: 225px;
    background-color: transparent;
    border-color: transparent;
    color: rgb(70, 56, 69);
}
.ToDoList .List input{
    height: 16px;
    min-width: 16px;
    accent-color: #d483d1;
    pointer-events: none;
}
.ToDoList .List .events{
    margin: 0px 30px 0px 15px;
    word-break: break-all;
}
.List input:checked~.task{
    text-decoration: line-through;
}
.container .input-field i{
    
    display: none;
    height: 10px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 15px;
    color: #ed72be;
    padding: o o o 10px;
}
.container .List:hover i{
    display: inline-flex;
}
.container .List i:hover{
    opacity: 1;
}
.container .pending-events{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 10px;
}
.pending-events span{
    padding: 2px 0 25px ;
    color: #5a4b5a;
}
.pending-events .clear-button{
    padding: 6px 10px;
    outline: none;
    border: none;
    color:rgb(98, 27, 100);
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}
label {
    display: block;
    font: 1rem 'Fira Sans', sans-serif;
}

input,
label {
    /* margin: 0.4rem 0; */
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    border-color: transparent;
    
}
input, ::placeholder{
    background-color: transparent;
}

.submit{
    border: none;
    border-radius: 30px;
    font-size: 15px;
    height: 45px;
    outline: none;
    width: 92%;
    background: #CDA0BC;
    cursor:pointer ;
    display: flex;
    justify-content: center;
}
.form{
    padding: 4px 0 0 0 ;
    margin: 0.4rem 0;
    outline: none;
    width: 90%;
    border: none;
    background: honeydew;
    color:rgb(98, 27, 100);
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    height: 45px;
    
    
}
.clear-button:hover{
    background-color: rgb(136, 122, 136);
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    background-color: rgb(187, 135, 178);
    padding: 20px 15px;
    border-radius: 0px;
    margin-top: 10px;
    cursor: default;
}
.input{
    color: #5a4b5a;
    display: inline;
}
.text{
    color: #5a4b5a;
    height: 20px;
}
.block{
    width:100%;
}

.block, .input-block{
    border-radius: 5px;
    padding: 5px 10px;
    

}
hr{
    color: black;
}
.input-block{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
}
</style>