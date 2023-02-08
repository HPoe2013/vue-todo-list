<template>
  <div class="funny-image">
    <img 
      @click="rotationDeg=(rotationDeg + rotationAmount) % (rotationAmount * rotationResetCount)" 
      v-bind:style="{transform: `rotate(${rotationDeg}deg)`}" 
      alt="Fun Image" 
      src="../assets/test-image.png"
    >
  </div>
</template>

<script>
export default {
  name: 'ImageRotater',
  data() {
    return {
        rotationAmount: 360,
        rotationResetCount: 5,
        rotationDeg: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    transition: transform 0.5s ease-in-out;
    cursor:pointer;
}
</style>
