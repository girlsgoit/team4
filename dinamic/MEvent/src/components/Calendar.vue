<template>
    <div class="calendar">
            <div class="month">
          <ul class="group-button">
            <br>
            <li class="m-month"> <h2>August</h2> </li>
            <li class="prev"><button type="button" class="m-button"><span> &#10094;</span></button></li>
            <li class="next"><button type="button" class="m-button"><span> &#10095;</span></button></li>
            
          </ul>
        
          <ul class="grp-button">
            <br>
            <br>
            <li><span style="font-size:18px">2023</span></li>
            <li class="prev"><button type="button" class="mobile-button"> &#10094;</button></li>
            <li class="next-item"><button type="button" class="mobile-button">&#10095;</button></li>
            
            
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
          <li><span class="active"><h4>1</h4></span></li>
          <li><span class="active"><h4>2</h4></span></li>
          <li><span class="active"><h4>3</h4></span></li>
          <li><span class="active"><h4>4</h4></span></li>
          <li><span class="active"><h4>5</h4></span></li>
          <li><span class="active"><h4>6</h4></span></li>
          <li><span class="active"><h4>7</h4></span></li>
          <li><span class="active"><h4>8</h4></span></li>
          <li><span class="active"><h4>9</h4></span></li>
          <li><span class="active"><h4>10</h4></span></li>
          <li><span class="active"><h4>11</h4></span></li>
          <li><span class="active"><h4>12</h4></span></li>
          <li><span class="active"><h4>13</h4></span></li>
          <li><span class="active"><h4>14</h4></span></li>
          <li><span class="active"><h4>15</h4></span></li>
          <li><span class="active"><h4>16</h4></span></li>
          <li><span class="active"><h4>17</h4></span></li>
          <li><span class="active"><h4>18</h4></span></li>
          <li><span class="active"><h4>19</h4></span></li>
          <li><span class="active"><h4>20</h4></span></li>
          <li><span class="active"><h4>21</h4></span></li>
          <li><span class="active"><h4>22</h4></span></li>
          <li><span class="active"><h4>23</h4></span></li>
          <li><span class="active"><h4>24</h4></span></li>
          <li><span class="active"><h4>25</h4></span></li>
          <li><span class="active"><h4>26</h4></span></li>
          <li><span class="active"><h4>27</h4></span></li>
          <li><span class="active"><h4>28</h4></span></li>
          <li><span class="active"><h4>29</h4></span></li>
          <li><span class="active"><h4>30</h4></span></li>
          <li><span class="active"><h4>31</h4></span></li>
        </ul>
        </div>

       <div class="container">
        <div class="input-field">
            <textarea placeholder="Enter your new task"></textarea>
            <i class="uil uil-notes note-icon"></i>
        </div>
        <ul class="ToDoList">
            <li class="List">
                <input type="checkbox"/>
                <span class="task">Play</span>
                <i class="uil uil-times"></i>
                <input type="date" class="date">
    
            </li>
            <li class="List">
                <input type="checkbox"/>
                <span class="task">Work</span>
                <i class="uil uil-times"></i>
                <input type="date" class="date">
            </li>
        </ul>
        <div class="pending-tasks">
            <span>You have <span>no </span>tasks pending.</span>
            <button class="clear-button">Clear All</button>
        </div>
       </div>
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
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Montserrat&family=Poppins:wght@300;400;600&display=swap');

*{  margin: 0;
    padding: 0;
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
    border-radius: 8px;
    padding: 25px;
    margin: -400px 50px 0px 940px;
    background-color: #bd85b2;
    box-shadow: 0px 5px 10px #bd85b2;
}
.container .input-field{
    position: relative;
    height: 60px;
    width: 100%;
}
.input-field textarea{
    height: 100%;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    outline: none;
    border-radius: 8px;
    padding: 18px 45px 18px 15px;
    border: 1px solid #ffffff;
    resize: none;
}
.input-field textarea:focus ~.note-icon{
    color: rgb(255, 255, 255);}

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
    color: #4d4d4d;
}
.container .ToDoList{
    margin-top: 20px;
}
.ToDoList .List{
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    background-color: #D5DFEA;
    padding: 20px 15px;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
}
.date{
    position: absolute;
    margin: 0px 30px 0px 0px;
    padding: 20px 15px;
    border-radius: 8px;
    margin-top: 0px;
    margin-left: 225px;
    background-color: transparent;
    border-color: transparent;
    color: #4e4d4d;
}
.ToDoList .List input{
    height: 16px;
    min-width: 16px;
    accent-color: #5a5a5a;
    pointer-events: visible;
}
.ToDoList .List .task{
    margin: 0px 30px 0px 15px;
    word-break: break-all;
}
.List input:checked~.task{
    text-decoration: line-through;
}
.ToDoList .List i{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 20px;
    padding: 5px;
    color: rgb(58, 58, 59);
    padding: 5px;
    opacity: 0.6;
    display: none;
}
.ToDoList .List:hover i{
    display: inline-flex;
}
.ToDoList .List i:hover{
    opacity: 1;
}
.container .pending-tasks{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
}
.pending-tasks span{
    color: #555455;
}
.pending-tasks .clear-button{
    padding: 6px 12px;
    outline: none;
    border: none;
    background: rgb(254, 254, 254);
    color:rgb(65, 65, 65);
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}
.clear-button:hover{
    background-color: #ffc7f98e;
}

ul {list-style-type: none;}
body {
    font-family: Verdana, sans-serif;
    margin: 0;
    padding: 0;
    height: 800px;
    width: 730px;
    margin: 200px 500px 0px 100px;
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

</style>