<template>
    <div class="body">
        <header>
            <div class="box">
                <div class="container">
                    <div class="top-header">
                        <header>Register</header>
                    </div>
                    <div class="input-field">
                        <input  type="text" class="input" placeholder="   Name" required v-model="name">
                        <input type="text" class="input" placeholder="   Surname" required v-model="surname">
                        <input type="text" class="input" placeholder="   Email" required v-model="email">
                        <i class="bx bx-user"></i>
                    </div>
                    <div class="input-field">
                        <input type="password" class="input" placeholder="   Password" required v-model="password">
                        <div class="bottom">
                            <div class="left">
                                <input type="checkbox" id="check">
                                <label for="check"> Remember me</label>
                            </div>
                        </div>
                        <div class="input-field">
                            <router-link to="/"><input @click="register_b" type="submit" class="submit" value="Register"></router-link>
                            <i class="bx bx-lock-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
//trebuie buton register
// import axios from 'axios';
export default {
    name: "Login",
    data: function () {
        return {
            name: "",
            surname: "",
            email: "",
            password: "",
            server: "",
        }
    },
    methods: {
        register_b: function () {
            console.log(this.name, this.surname, this.password,this.email)
                axios.post('https://97c5-94-139-153-193.ngrok-free.app/', json).then(response => {
                    
                    this.name()
                }).catch(error => {
                    console.log(error.message)
                })

                axios.post('https://97c5-94-139-153-193.ngrok-free.app/', json).then(response => {
                    
                    this.surname()
                }).catch(error => {
                    console.log(error.message)
                })

                axios.post('https://97c5-94-139-153-193.ngrok-free.app/', json).then(response => {
                    
                    this.email()
                }).catch(error => {
                    console.log(error.message)
                })

                axios.post('https://97c5-94-139-153-193.ngrok-free.app/', json).then(response => {

                    this.password()
                }).catch(error => {
                    console.log(error.message)
                })

        }
    },

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@500&family=Poppins:wght@300&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}


.body {
    background: #80376A;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
}

.container {
    width: 350px;
    display: flex;
    flex-direction: column;
    padding: 0 15px 0 15px;

}

span {
    color: #CDA0BC;
    font-size: large;
    display: flex;
    justify-content: center;
    padding: 10px 0 10px 0;
}

header {
    color: #CDA0BC;
    font-size: 35px;
    display: flex;
    justify-content: center;
    padding: 10px 0 10px 0;

}

.bottom {
    display: flex;
    flex-direction: column;
    color: #CDA0BC;
    padding: 10px 10px 20px 0;
    font-size: 15px;

}

.input {
    height: 30px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 15px;
    color: #CDA0BC;
    padding: o o o 10px;
    background: rgba(255, 255, 255, 0.1)
}

i {
    position: relative;
    left: 12px;
    color: #CDA0BC;

}

.bottom {
    display: block;
    justify-content: center;
    align-items: center;
    color: #CDA0BC;

}

::-webkit-input-placeholder {
    color: #CDA0BC;

}

.submit {
    border: none;
    border-radius: 30px;
    font-size: 15px;
    height: 45px;
    outline: none;
    width: 100%;
    background: #CDA0BC;
    cursor: pointer;
    transition: .6s;

}

.register-link {
    display: block;
    justify-content: center;
    align-items: center;
    color: #CDA0BC;
    font-size: 15px;

}

.button {
    color: #CDA0BC;
}
</style>