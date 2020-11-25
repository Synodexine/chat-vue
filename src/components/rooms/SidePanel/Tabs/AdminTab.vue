<template>
  <div class="container">
    <div class="title">Admin</div>
  </div>
</template>

<script>
export default {
  name: 'AdminTab',
  components: {
  },
  data() {
    return {
      name: "Admin",
      shortName: "ADM",
      permissionLevel: 4
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