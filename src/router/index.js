import Register from '../components/accounts/Register'
import Login from '../components/accounts/Login'
import Rooms from '../components/rooms/Rooms'
import SingleRoom from '../components/rooms/RoomsList/SingleRoom'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Login},
    {path: '/register/', component: Register},
    {path: '/rooms/', component: Rooms},
    {path: '/rooms/:id', component: SingleRoom},
]

export const router = new VueRouter({
    routes
})