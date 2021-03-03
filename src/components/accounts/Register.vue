<template>
    <div class='container'>
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <CustomButton @on-click="registerButtonClick">Register</CustomButton>
        <div>
            Already registered? 
            <router-link to='/'>Log in</router-link>
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
    name: "Register",
    data() {
        return {
            username: "",
            password: "",
            errors: []
        }
    },
    methods: {
        async registerButtonClick(){
            this.errors = []
            if (this.password.length < 6)
                this.errors.push("Password must be at least 6 symbols length")
            if (this.username.length < 1)
                this.errors.push("Username must be at least 1 symbol length")
            else {
                let response = await Accounts.create_user(this.username, this.password)
                if (response.status == 400){
                    this.errors.push("User with this name already extists")
                }
                else {
                    this.$cookie.set('token', response.data, {SameSite: 'None', expires: '14D'})
                    RestClient.defaults.headers.common.Authorization = response.data
                    this.$router.push('/rooms/')
                }
            }
        }
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