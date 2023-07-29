<template>
    <div class="container">
        <div class="input-field">
            <textarea placeholder="Enter your new task"></textarea>
            <i class="uil uil-notes note-icon"></i>
        </div>
        <div id="create-todo">
            <div>
                <label for="start">Deadline: </label>
                <input type="date" id="start" name="trip-start" value="2023-01-01" in="2023-01-01" max="2024-12-31"
                    class="inputdate" />
            </div>
            <button class="clear-button2">Create</button>
        </div>
        <ul class="ToDoList" v-for="task in tasks">
            <!-- task item -->
            <TaskItem :title="task.title" :id="task.id" :data="task.date"/>
       
        </ul>
        <div class="pending-tasks">
            <span>You have <span>no </span>tasks pending.</span>
            <button class="clear-button">Clear All</button>
        </div>
    </div>
</template>

<script>

import Calendar from '../components/Calendar.vue';
import TaskItem from '../components/TaskItem.vue';
export default {
    name: "TaskList",
    data: function () {
        return {
            tasks: [{ id: 1, title: 'taskName', date: "2023-07-09" , completed: true},
            { id: 2, title: 'hgfgs', date: "2022-03-19" ,completed: true},
            { id: 3, title: 'taskName', date: "2023-04-09" ,completed: false},
            { id: 4, title: 'taskName', date: "2023-08-29",completed: true }
            ]
        }
    },
    components: {
        Calendar,
        TaskItem
    }
}

</script>

<style scoped>
ul {
    list-style-type: none;
}

.body {
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
    background-color: #ddd;
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
    margin: -13px 150px;
    font-size: 20px;
    cursor: pointer;
}

.next {
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.body {
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

.container .input-field {
    position: relative;
    height: 60px;
    width: 100%;
}

.input-field textarea {
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

.input-field textarea:focus~.note-icon {
    color: rgb(255, 255, 255);
}

textarea::-webkit-scrollbar {
    display: none;
}

.input-field .note-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 24px;
    color: #4d4d4d;
}

.container .ToDoList {
    margin-top: 20px;
}

.ToDoList .List {
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

.date {
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

.ToDoList .List input {
    height: 16px;
    min-width: 16px;
    accent-color: #5a5a5a;
    pointer-events: visible;
}

.ToDoList .List .task {
    margin: 0px 30px 0px 15px;
    word-break: break-all;
}

.List input:checked~.task {
    text-decoration: line-through;
}

.ToDoList .List i {
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



.ToDoList .List:hover i {
    display: inline-flex;
}

.ToDoList .List i:hover {
    opacity: 1;
}

.container .pending-tasks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
}

.pending-tasks span {
    color: #555455;

}

.pending-tasks .clear-button {
    padding: 6px 12px;
    outline: none;
    border: none;
    background: rgb(254, 254, 254);
    color: rgb(65, 65, 65);
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}

.clear-button:hover {
    background-color: #ffc7f98e;
}

.body {
    background-color: rgb(255, 255, 255);
}

ul {
    margin: 0;
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

.container .input-field {
    position: relative;
    height: 60px;
    width: 100%;

}

label {
    margin: 0.4rem 0;
    display: inline-flex;
    font: 1rem 'Fira Sans', sans-serif;
    color: #5a4b5a;

}

input,
label {
    margin: 0.4rem 0;
}

.input-field textarea {
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

.input-field textarea:focus~.note-icon {
    color: rgb(255, 255, 255);
}

textarea::-webkit-scrollbar {
    display: none;
}

.input-field .note-icon {
    position: absolute;
    top: 15%;
    right: 30px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 24px;
    color: #4d4d4d;
}

.ToDoList .List {
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    background-color: #D5DFEA;
    padding: 20px 15px;
    border-radius: 8px;
    margin-top: 10px;
    cursor: default;
}

.clear-button2 {
    padding: 6px 12px;
    outline: none;
    border: none;
    background: honeydew;
    color: rgb(98, 27, 100);
    font-size: 15px;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 5px;
}

.clear-button2:hover {
    background-color: rgb(182, 161, 182);
}

.date {
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

.ToDoList .List input {
    height: 16px;
    min-width: 16px;
    accent-color: #5a5a5a;
    pointer-events: visible;
}

.ToDoList .List .task {
    margin: 0px 30px 0px 15px;
    word-break: break-all;
}

.List input:checked~.task {
    text-decoration: line-through;
}

.ToDoList .List i {
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

.ToDoList .List:hover i {
    display: inline-flex;
}

.ToDoList .List i:hover {
    opacity: 1;
}

.container .pending-tasks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
}

.pending-tasks span {
    color: #555455;
}

.pending-tasks .clear-button {
    padding: 6px 12px;
    outline: none;
    border: none;
    background: rgb(254, 254, 254);
    color: rgb(65, 65, 65);
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}

.clear-button:hover {
    background-color: #ffc7f98e;
}

#create-todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}</style>