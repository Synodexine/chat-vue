<template>
  <div class="message-with-username">
      {{ username }}: {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    username: null,
    message: null,
  }
}
</script>

<style scoped>
.message-with-username{
  margin-left: 10px;
  margin-bottom: 10px;
  color: black;
}
</style>