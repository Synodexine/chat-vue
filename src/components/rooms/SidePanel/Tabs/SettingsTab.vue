<template>
  <div class="container">
    <div class="title">Settings</div>
  </div>
</template>

<script>
export default {
  name: 'SettingsTab',
  components: {

  },
  data() {
    return {
      name: "Settings",
      shortName: "S",
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