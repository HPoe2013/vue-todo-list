<template>
  <h1>SUPER SPECIAL AWESOME TODO LIST!!</h1>
  <component :is="this.displayComponent" />
  <PoeButton :onClick="openList" :class="this.buttonClass" text="Open List Mode!" />
</template>

<script>
import ImageRotater from './components/ImageRotater.vue'
import TodoList from './components/TodoList.vue'
import PoeButton from './components/PoeButton.vue'

export default {
  name: 'App',
  data() {
    return {
      displayComponent: 'ImageRotater',
      buttonClass: ''
    }
  },
  methods: {
    openList() {
      this.displayComponent = 'TodoList';
      this.buttonClass = 'hidden';
    }
  },
  components: {
    ImageRotater,
    TodoList,
    PoeButton
  }
}
</script>

<style>
.hidden {
  display: none
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
