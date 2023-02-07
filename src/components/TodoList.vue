<template>
  <div class="todo-list">
    <h1>To Do:</h1>
    <ol class="list">
      <li v-for="item in listItems" :key="item.id" >
        <TodoListItem :text=item.task :id=item.id :onDelete=onItemDelete />
      </li>
    </ol>

    <button @click="addItemClick">Add new Item</button>
  </div>
</template>
  
<script>
  import TodoListItem from './TodoListItem.vue'
  import TodoListService from '@/scripts/todoListService';

  export default {
    name: 'TodoList',
    data() {
      return {
        listItems: [{id: 0, task: "Delete This"}],
      }
    },
    mounted() {
      TodoListService.getTodoListItems().then(data => {
        this.listItems = data.todos ?? [];
      });
    },
    methods: {
      addItemClick() {
        this.onCreate('new item');
      },
      onItemDelete(itemId) {
        TodoListService.removeTodoListItem(itemId).then(data => {
          this.listItems = data.todos ?? [];
        });
      },
      onCreate(task) {
        TodoListService.addTodoListItem(task).then(data => {
          this.listItems = data.todos ?? [];
        });
      },
      onItemUpdate(itemId, task) {
        TodoListService.updateTodoListItem(itemId, task).then(data => {
          this.listItems = data.todos ?? [];
        });
      },
    },
    components: {
      TodoListItem
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .list {
      width: 50%;
      margin: auto;
    }
  </style>
  