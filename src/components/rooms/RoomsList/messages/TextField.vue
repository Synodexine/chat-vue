<template>
  <div class="text-field">
      <input @keydown="$emit('keydown', $event)" :value="value" @input="$emit('input', $event.target.value)" type="text"/>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: ['value'],
  components: {
  },
  mounted(){
      
  }
}
</script>

<style scoped>
.text-field{
    width: 100%;
}

input{
    width: 99%;
    border: black 2px solid;
    height: 25px;
}
</style>