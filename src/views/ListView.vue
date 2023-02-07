<template>
  <h1>THE LIST!!</h1>
  <TodoList />
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList,
  }
}
</script>
