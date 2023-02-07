<template>
    <div class="todo-list-item">
        <input type="checkbox" /> 
        <span class="center">{{text}}</span>
        <span>
            <button class="delete-btn" @click="onDelete(this.id)">X</button>
            <button class="edit-btn">Edit</button>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'TodoListItem',
        props: {
            id: Number,
            text: String,
            onDelete: Function
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list-item {
    display:flex;
    align-items:center;
    align-content: space-between;

    margin: 10px;
    border: 1px solid;
    padding: 5px;
    border-radius: 10px;
}

.center {
    flex-grow: 4;
}

</style>
  