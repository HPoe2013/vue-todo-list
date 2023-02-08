<template>
  <div class="todo-list">
    <h1>To Do:</h1>
    <ul class="list">
      <li v-for="item in listItems" :key="item.id" >
        <TodoListItem :text=item.task :id=item.id :onDelete=onItemDelete :onSave=onItemUpdate />
      </li>
    </ul>

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
        listItems: [],
      }
    },
    mounted() {
      TodoListService.getTodoListItems().then(data => {
        this.listItems = data.todos ?? [];
      });
    },
    methods: {
      addItemClick() {
        let text = window.prompt('Enter task text for new item:', 'new item');
        this.onCreate(text);
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

      list-style-type: none;
    }
  </style>
  