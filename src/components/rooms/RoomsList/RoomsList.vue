<template>
  <div>
    <div class="rooms-header">
        <div class="number">Number</div>
        <div class="name">Name</div>
        <div class="capacity">Online</div>
        <div class="button">Enter</div>
    </div>
    <RoomListLine v-for="room in rooms" :room="room" :key="room.id"></RoomListLine>
  </div>
</template>

<script>
import RoomListLine from './RoomListLine.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'RoomsList',
  components: {
    RoomListLine
  },
  computed: {
    ...mapGetters(['rooms']),
  },
  mounted() {
    this.$store.dispatch('GET_ROOMS')
  },
}
</script>

<style scoped>
.rooms-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.rooms-header div{
    background-color: teal;
}

.rooms-header .number{
    width: 15%;
    color: white;
}

.rooms-header .name{
    width: 60%;
    color: white;
}

.rooms-header .capacity{
    width: 10%;
    color: white;
}

.rooms-header .button{
    width: 15%;
    color: white;
}
</style>