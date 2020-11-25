<template>
    <div class="button-container" @click="$emit('on-click')">
        <div class="button-text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabButton",
    methods: {
        
    }
}
</script>


<style scoped>
.button-container{
    background-color: darkcyan;
    color: white;
    height: 30px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}

.buttonPressed{
    background-color: #006f6f;
    color: white;
    height: 30px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
</style>