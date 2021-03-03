<template>
    <div class='container'>
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <CustomButton @on-click="loginButtonClick">LogIn</CustomButton>
        <div>
            Not registered yet? 
            <router-link to='/register/'>Register</router-link>
        </div>
        <div v-if="errors.length > 0" class='error-message'>
            <ul>
                <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import CustomButton from '../CustomButton.vue'
import { Accounts } from '../../api/accounts'
import { RestClient } from '../../api/common'

export default {
    components: {
      CustomButton
    },
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            errors: []
        }
    },
    methods: {
        async loginButtonClick(){
            this.errors = []
            let response = await Accounts.login_user(this.username, this.password)
            this.errors.push("Unknown error on server side. Please, try again later")
            if (response.status == 400){
                this.errors.push("Provided username or password was wrong")
            }
            else if(response.status == 200){
                this.$cookie.set('token', response.data, {SameSite: 'None', expires: '14D'})
                RestClient.defaults.headers.common.Authorization = response.data
                this.$router.push('/rooms/')
            }
            else
                this.errors.push("Unknown error on server side. Please, try again later")
        }
    },
    beforeCreate() {
        if (this.$cookie.get('token') != null)
            this.$router.push('/rooms/')
    }
}
</script>


<style scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.error-message{
    background-color: indianred;
    color: white;
    margin-top: 20px;
    padding-right: 25px;
    border-radius: 4px;
    text-align: justify;
}
</style>