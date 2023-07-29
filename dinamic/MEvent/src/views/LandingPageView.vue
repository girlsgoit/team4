<template>
    <div class="body">
        <div class="calendar">
            <div class="month">
                <ul class="group-button">
                    <br>
                    <li class="m-month">
                        <h2>August</h2>
                    </li>
                    <li class="prev"><button type="button" class="m-button"><span> &#10094;</span></button></li>
                    <li class="next"><button type="button" class="m-button"><span> &#10095;</span></button></li>

                </ul>

                <ul class="grp-button">
                    <br>
                    <br>
                    <li><span style="font-size:18px">2023</span></li>


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
                <li><span class="active">
                        <h4>1</h4>
                    </span></li>
                <li><span class="active">
                        <h4>2</h4>
                    </span></li>
                <li><span class="active">
                        <h4>3</h4>
                    </span></li>
                <li><span class="active">
                        <h4>4</h4>
                    </span></li>
                <li><span class="active">
                        <h4>5</h4>
                    </span></li>
                <li><span class="active">
                        <h4>6</h4>
                    </span></li>
                <li><span class="active">
                        <h4>7</h4>
                    </span></li>
                <li><span class="active">
                        <h4>8</h4>
                    </span></li>
                <li><span class="active">
                        <h4>9</h4>
                    </span></li>
                <li><span class="active">
                        <h4>10</h4>
                    </span></li>
                <li><span class="active">
                        <h4>11</h4>
                    </span></li>
                <li><span class="active">
                        <h4>12</h4>
                    </span></li>
                <li><span class="active">
                        <h4>13</h4>
                    </span></li>
                <li><span class="active">
                        <h4>14</h4>
                    </span></li>
                <li><span class="active">
                        <h4>15</h4>
                    </span></li>
                <li><span class="active">
                        <h4>16</h4>
                    </span></li>
                <li><span class="active">
                        <h4>17</h4>
                    </span></li>
                <li><span class="active">
                        <h4>18</h4>
                    </span></li>
                <li><span class="active">
                        <h4>19</h4>
                    </span></li>
                <li><span class="active">
                        <h4>20</h4>
                    </span></li>
                <li><span class="active">
                        <h4>21</h4>
                    </span></li>
                <li><span class="active">
                        <h4>22</h4>
                    </span></li>
                <li><span class="active">
                        <h4>23</h4>
                    </span></li>
                <li><span class="active">
                        <h4>24</h4>
                    </span></li>
                <li><span class="active">
                        <h4>25</h4>
                    </span></li>
                <li><span class="active">
                        <h4>26</h4>
                    </span></li>
                <li><span class="active">
                        <h4>27</h4>
                    </span></li>
                <li><span class="active">
                        <h4>28</h4>
                    </span></li>
                <li><span class="active">
                        <h4>29</h4>
                    </span></li>
                <li><span class="active">
                        <h4>30</h4>
                    </span></li>
                <li><span class="active">
                        <h4>31</h4>
                    </span></li>
            </ul>
        </div>
        <section>
            <ul class="plans">
                <li>
                    <p class="the-first">Make</p>
                    <p class="the-second">Your</p>
                    <p class="p3">Own</p>
                    <p class="p4">Plan</p>
                </li>
            </ul>
        </section>
    </div>
</template>


<script>

export default {
    name: "LandingPageView",
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Montserrat&family=Poppins:wght@300;400;600&family=Satisfy&display=swap');


ul {
    list-style-type: none;
}

.body {
    font-family: Verdana, sans-serif;
    padding: 0;
    height: 800px;
    width: 730px;
    margin: 100px 400px 0px 0px;
    /* background-color: #D5DFEA; */
}

.calendar {
    margin: 0;
}

.month {
    padding: 20px 25px;
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
    margin: 0;
}


.month .prev {
    float: left;
    padding-top: 10px;
    margin: 0;
}


.month .next {
    float: right;
    padding-top: 10px;
    margin: 0;
}


.weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
    margin: 0px 50px 0px 50px;
}

.weekdays li {
    display: inline-block;
    width: 13.6%;
    color: #666 !important;
    text-align: center;
    font-family: Lora;
    margin: 0;
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
    font-size: 12px;
    color: #777;
    font-family: Lora;
    font-size: 17px;
}


.days li .active {
    padding: 5px;
}

.days h4 {
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
    margin: -40px 150px;
    font-size: 20px;
    cursor: pointer;
}

.next {
    margin: -13px 5px;
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

.next-item {
    margin: -12px 135px;
}


.m-month {
    font-family: Display;
    margin: -30px 200px;
}

.grp-button {
    font-family: Display;
}

* {

    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}


.plans {
    font-family: 'Satisfy', cursive;
    position: relative;
    color: #6F4B68;
    font-size: 150px;
    padding-left: 70px;
    padding-right: 70px;
    text-align: right;
    font-weight: bold;
    line-height: 2px;
    margin-left: 720px;
    margin-top: -750px;
}

.the-firs,
.p3 {
    margin-left: 0px;
}

.the-second,
.p4 {
    margin-right: -450px;
}

.m-month h2 {
    margin: 0;

}

.days li {
    margin: 0;
}</style>