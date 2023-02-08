<template>
    <div class="todo-list-item">
        <span class="center">
            <span v-if="!isEditing">{{text}}</span>
            <input @keydown="onUpdate($event)" class="edit-text" v-if="isEditing" :value="text" />
        </span>
        <span class="btn-container">
            <button class="edit-btn" @click="editClicked()">{{isEditing?"Save":"Edit"}}</button>
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
                updatedText: this.text,
            }
        }, methods: {
            onUpdate(event) {
                this.updatedText = event.target.value;
            },
            deleteClicked() {
                this.isEditing 
                    ? this.isEditing = false
                    : this.onDelete(this.id);
            },
            editClicked () {
                this.isEditing
                    ? this.onSave(this.id, this.updatedText)
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

    background-color: white;
}

.edit-text {
    width: 85%;
}

.btn-container {
    white-space: nowrap;
}

.center {
    flex-grow: 4;
}

</style>
  