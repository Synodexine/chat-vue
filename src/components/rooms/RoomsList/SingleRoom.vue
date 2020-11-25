<template>
  <div class="container-main">
      <div class="messages-holder">
          <MessagesList :messages="messages"></MessagesList>
          <div class="message-input">
              <TextField v-model="value"></TextField>
              <CustomButton>Send</CustomButton>
          </div>
      </div>
  </div>
</template>

<script>
import MessagesList from './messages/MessagesList'
import TextField from './messages/TextField'
import CustomButton from '../../CustomButton'

export default {
  name: 'SingleRoom',
  components: {
    MessagesList,
    TextField,
    CustomButton
  },
  data() {
    return {
        messages: [],
        value: null,
        wsConnection: null,
    }
  },
  methods: {
      sendMessage(){

      }
  },
  mounted() {
      console.log(document.cookie)
      this.wsConnection = new WebSocket('ws://192.168.20.84:8000/ws/chat/123/')

      this.wsConnection.onmessage = (event) => {
          console.log(event)
      }

      this.wsConnection.onopen = (event) => {
          console.log(event)
      }

      this.messages.push({username:'ahoskie', data:'hello!'})
      this.messages.push({username:'test1', data:'Hi!'})
      this.messages.push({username:'test1', data:'hows your mother'})
      this.messages.push({username:'Tanka', data:'want you some sunday girl'})
      this.messages.push({username:'ahoskie', data: this.value})
  },
}
</script>

<style scoped>
.container-main{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 100%;
}

.messages-holder{
    height: 90%;
    width: 50%;
    background-color: darkgray;
}

.message-input{
    display: flex;
    flex-direction: row;
}

.button-container{
    border-radius: 0px;
}
</style>