<template>
  <div class="container">
    <div class="title">Account</div>
      <Info>Name: {{ user.info.username }}</Info>
      <Info>Status: {{ user.info.permission_level.level_name }}</Info>
      <TabButton value="button" @on-click="logOut">LogOut</TabButton>
  </div>
</template>

<script>
import TabButton from './Elements/TabButton'
import Info from './Elements/Info'
import { RestClient } from '../../../../api/common'

export default {
  name: 'AccountTab',
  components: {
      TabButton,
      Info
  },
  methods: {
    logOut(){
      RestClient.defaults.headers.common['Authorization'] = null
      this.$cookie.delete('token')
      this.$router.push('/')
    }
  },
  computed:{
    user(){
      return this.$store.getters.user
    }
  },
  data() {
    return {
      name: "Account",
      shortName: "A",
      permissionLevel: 1
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