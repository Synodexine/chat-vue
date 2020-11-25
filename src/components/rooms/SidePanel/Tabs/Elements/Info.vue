<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Info"
}
</script>


<style scoped>
.button-container{
    background-color: darkcyan;
    color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
</style>