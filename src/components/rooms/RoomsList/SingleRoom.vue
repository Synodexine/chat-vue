<template>
  <div class="container-main">
      <input type="button" @click="onButtonClick" value="<< Back">
      <div class="messages-holder">
          <MessagesList :messages="messages"></MessagesList>
          <div class="message-input">
              <TextField @keydown.enter="sendMessage" v-model="value"></TextField>
              <CustomButton @on-click="sendMessage">Send</CustomButton>
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
    computed:{
        user(){
            return this.$store.getters.user
        }
    },
    data() {
        return {
            room_id: this.$route.params.id,
            messages: [],
            value: null,
            wsConnection: null,
        }
    },
    methods: {
        sendMessage(){
            if (this.value != null){
                    var message = {
                    message: this.value
                }
                this.wsConnection.send(JSON.stringify(message));
                this.value = "";
                }
            },
        onButtonClick() {
            this.$router.push('/rooms/')
        }
    },
    mounted() {
        this.wsConnection = new WebSocket('ws://192.168.100.5:8000/ws/chat/'+this.$route.params.id+'/?token='+this.$cookie.get('token'))

        this.wsConnection.onmessage = (event) => {
            var receivedMessage = JSON.parse(event.data)
            this.messages.push({username: this.user.info.full_prefix + " " + receivedMessage.username, data: receivedMessage.message})
            
        }

        this.wsConnection.onopen = (event) => {
            event
            //this.messages.push({username: receivedMessage.username, data: receivedMessage.message})
        }
    },
    beforeRouteLeave(to, from, next){
        to;
        from;
        next(true)
        this.wsConnection.close();
    }
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