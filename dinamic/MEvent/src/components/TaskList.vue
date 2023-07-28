<template>
    <div class="container">
        <div class="input-field">
            <textarea placeholder="Enter your new task"></textarea>
            <i class="uil uil-notes note-icon"></i>
        </div>
        <ul class="ToDoList">
            <li class="List">
                <input type="checkbox" />
                <span class="task">Play</span>
                <i class="uil uil-times"></i>
                <input type="date" class="date">

            </li>
            <li class="List">
                <input type="checkbox" />
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

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Montserrat&family=Poppins:wght@300;400;600&display=swap');

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
    margin: 85px auto 0;
    background-color: rgb(228, 188, 224);
    box-shadow: 0px 5px 10px rgba(218, 151, 151, 0.1);
}

.container .input-field {
    position: relative;
    height: 64px;
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
    color: beige;
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
    color: rgb(91, 33, 87);
}

.container .ToDoList {
    margin-top: 20px;
}

.ToDoList .List {
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;
    background-color: rgb(187, 135, 178);
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
    color: rgb(70, 56, 69);
}

.ToDoList .List input {
    height: 16px;
    min-width: 16px;
    accent-color: #bdb6b6;
    pointer-events: none;
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
    color: rgb(64, 28, 72);
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
    color: #5a4b5a;
}

.pending-tasks .clear-button {
    padding: 6px 12px;
    outline: none;
    border: none;
    background: honeydew;
    color: rgb(98, 27, 100);
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}

.clear-button:hover {
    background-color: rgb(136, 122, 136);
}</style>