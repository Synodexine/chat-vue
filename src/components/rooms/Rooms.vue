<template>
  <div class="container">
    <div class="side-panel-container">
      <SidePanel class="SidePanel"></SidePanel>
    </div>
    <RoomList class="RoomList"></RoomList>
  </div>
</template>

<script>
import RoomList from './RoomsList/RoomsList.vue'
import SidePanel from './SidePanel/SidePanel'
import { IsTokenValid } from '../../services/authentication'

export default {
  name: 'Rooms',
  components: {
    RoomList,
    SidePanel
  },
  beforeCreate() {
    let tokenCookie = this.$cookie.get('token')
    if (tokenCookie == null || !IsTokenValid(tokenCookie))
      this.$router.push('/')
  }
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: flex-start;
  height: 100%;
}

.side-panel-container{
  width: 25%;
  height: 100%;
}

.container .RoomList{
  width: 75%;
}
</style>