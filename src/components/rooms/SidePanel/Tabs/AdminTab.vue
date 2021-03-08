<template>
  <div class="container">
    <div class="title">Admin</div>
    <Info>Choose the room to delete</Info>
    <input v-model="roomId" type="number">
    <button v-on:click="butClick">Delete</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Info from './Elements/Info';

export default {
  name: 'AdminTab',
  components: {
    Info
  },
  computed: {
    ...mapGetters(['rooms']),
  },
  data() {
    return {
      name: "Admin",
      shortName: "ADM",
      permissionLevel: 4,
      roomId: 0
    }
  },
  methods: {
    async butClick(){
      this.$store.dispatch('DELETE_ROOM', this.roomId)
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}

</style>