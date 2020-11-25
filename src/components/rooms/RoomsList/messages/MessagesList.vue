<template>
  <div class="container">
      <Message v-for="message in messages" :key="message.id" :username="message.username" :message="message.data"></Message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'MessagesList',
  components: {
    Message
  },
  props:{
      messages: Array
  },
  mounted(){
  }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
}
</style>