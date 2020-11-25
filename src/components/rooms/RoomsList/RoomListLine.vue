<template>
    <div class="container">
        <div class="number">{{ room.id }}</div>
        <div class="name">{{ room.name }}</div>
        <div class="capacity">{{ room.users_online.length }}/{{ room.capacity }}</div>
        <div class="button">
            <CustomButton @on-click="onButtonClick">Enter</CustomButton>
        </div>
    </div>
</template>

<script>
import CustomButton from '../../CustomButton'

export default {
    name: "RoomsListLine",
    components:{
        CustomButton
    },
    props: {
        room: Object,
    },
    methods: {
        onButtonClick() {
            this.$router.push('/rooms/'+this.room.id)
        }
    }
}
</script>


<style scoped>
.container{
    display: flex;
    align-items: center;
    background-color: lightblue;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    margin-bottom: 2px;
}

.container .number{
    width: 15%;
}

.container .name{
    width: 60%;
}

.container .capacity{
    width: 10%;
}

.container .button{
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>