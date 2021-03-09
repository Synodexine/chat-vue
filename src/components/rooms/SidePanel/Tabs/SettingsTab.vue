<template>
  <div class="container">
    <div class="title">Settings</div>
    <Info>Enter new prefix (max length 8)</Info>
    <input maxlength="8" v-model="newPrefix" type="text">
    <button v-on:click="butClick">Change</button>
  </div>
</template>

<script>
import Info from './Elements/Info';

export default {
  name: 'SettingsTab',
  components: {
    Info
  },
  data() {
    return {
      name: "Settings",
      shortName: "S",
      permissionLevel: 1,
      newPrefix: "",
    }
  },
  methods: {
    async butClick(){
      this.$store.dispatch('SET_USER_PREFIX', this.newPrefix)
      this.newPrefix = "";
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