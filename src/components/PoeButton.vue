<template>
    <span @click="onClick" class="poe-button">
        {{ text }}
    </span>
</template>

<script>
    export default {
        name: 'PoeButton',
        props: {
            text: String,
            color: String,
            onClick: Function
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .poe-button {
        cursor: pointer;
    }
</style>
  