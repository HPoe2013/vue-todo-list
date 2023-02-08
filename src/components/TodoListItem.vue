<template>
    <div class="todo-list-item">
        <input type="checkbox" /> 
        <span class="center">
            <span v-if="!isEditing">{{text}}</span>
            <input class="edit-text" v-if="isEditing" :value="text" />
        </span>
        <span class="btn-container">
            <button class="edit-btn" @click="editClicked($event)">{{isEditing?"Save":"Edit"}}</button>
            <button class="delete-btn" @click="deleteClicked()">X</button>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'TodoListItem',
        props: {
            id: Number,
            text: String,
            onDelete: Function,
            onSave: Function
        }, data () {
            return {
                isEditing: false,
            }
        }, methods: {
            deleteClicked() {
                this.isEditing 
                    ? this.isEditing = false
                    : this.onDelete(this.id);
            },
            editClicked (e) {
                this.isEditing
                    ? this.onSave(this.id, e.target.parentElement.parentElement.querySelector('.edit-text').value)
                    : this.isEditing = true;
            }
        }
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

.btn-container {
    white-space: nowrap;
}

.center {
    flex-grow: 4;
}

</style>
  