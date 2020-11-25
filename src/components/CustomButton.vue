<template>
    <div class="button-container" @click="$emit('on-click')">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CustomButton",
    methods: {
    }
}
</script>


<style scoped>
.button-container{
    background-color: darkcyan;
    color: white;
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 12px;
}
</style>