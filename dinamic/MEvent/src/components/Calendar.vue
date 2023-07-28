<template>
     <div class="month">
  <ul class="group-button">
    <li class="m-month"> <h2>August</h2> </li>
    <li class="prev"><button type="button" class="m-button"><span> &#10094;</span></button></li>
    <li class="next"><button type="button" class="m-button"><span> &#10095;</span></button></li>
    
  </ul>

  <ul class="grp-button">
    <br>
    <li><span style="font-size:18px">2023</span></li>
    <li class="prev"><button type="button" class="mobile-button"> &#10094;</button></li>
    <li class="next-item"><button type="button" class="mobile-button">&#10095;</button></li>
    <br>
    
    
  </ul>
</div>

<ul class="weekdays">
  <li><span class="active">Mo</span></li>
  <li><span class="active">Tu</span></li>
  <li><span class="active">We</span></li>
  <li><span class="active">Th</span></li>
  <li><span class="active">Fr</span></li>
  <li><span class="active">Sa</span></li>
  <li><span class="active">Su</span></li>
</ul>

<ul class="days">
    <li><span class="active"></span></li>
  <li><span class="active">1</span></li>
  <li><span class="active">2</span></li>
  <li><span class="active">3</span></li>
  <li><span class="active">4</span></li>
  <li><span class="active">5</span></li>
  <li><span class="active">6</span></li>
  <li><span class="active">7</span></li>
  <li><span class="active">8</span></li>
  <li><span class="active">9</span></li>
  <li><span class="active">10</span></li>
  <li><span class="active">11</span></li>
  <li><span class="active">12</span></li>
  <li><span class="active">13</span></li>
  <li><span class="active">14</span></li>
  <li><span class="active">15</span></li>
  <li><span class="active">16</span></li>
  <li><span class="active">17</span></li>
  <li><span class="active">18</span></li>
  <li><span class="active">19</span></li>
  <li><span class="active">20</span></li>
  <li><span class="active">21</span></li>
  <li><span class="active">22</span></li>
  <li><span class="active">23</span></li>
  <li><span class="active">24</span></li>
  <li><span class="active">25</span></li>
  <li><span class="active">26</span></li>
  <li><span class="active">27</span></li>
  <li><span class="active">28</span></li>
  <li><span class="active">29</span></li>
  <li><span class="active">30</span></li>
  <li><span class="active">31</span></li>
</ul>
</template>


<script>
    export default {
        name: "Calendar",
        data: function () {
            return {
                selected: ""
            }
        }
        
    }

</script>

<style scoped>
ul {list-style-type: none;}
body {
    font-family: Verdana, sans-serif;
    margin: 0;
    padding: 0;
    height: 800px;
    width: 730px;
    margin: 50px 500px 500px 50px;
}


.month {
    padding: 70px 25px;
  background: #AB8271;
  text-align: center;
  position: relative;
  object-fit: cover;
  border-radius: 40px 40px 0px 0px;
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
  margin: 0;
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

.active {
    margin: 10px 40px;
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
  margin: -37px 200px;
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
  margin: -30px 260px;
  font-size: 12px;
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
</style>