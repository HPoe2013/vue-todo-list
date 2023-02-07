import axios from "axios";

class TodoListService {
    baseUrl = 'https://illfatedlavendermemoryallocator--jabez007.repl.co/api/todo/';

    testData = {"todos":[{"id":1,"task":"Create a TODO list."},{"id":2,"task":"Connect your TODO list to this API."},{"id":3,"task":"Add an image."},{"id":4,"task":"Create at least 1 animation."},{"id":5,"task":"Add a unit testing framework (mocha preferred) of your choice and write at least one unit test."}]};

    async request(method, url, data = {}) {
        return await axios({
            withCredentials: false,
            method,
            url,
            data
        });
    }

    async getTodoListItems() {
        try {
            return await this.request(
                'GET', 
                this.baseUrl
            );
        } catch (error) {
            alert('Error getting todo list items');
            console.error(error);
            return this.testData;
        }
    }

    async removeTodoListItem(itemId) {
        try {
            await this.request(
                'DELETE',
                this.baseUrl + itemId + '/'
            )

            return this.getTodoListItems();
        } catch (error) {
            alert('Error deleting todo list item');
            console.error(error);
        }
    }

    async addTodoListItem(task) {
        try {
            await this.request(
                'POST',
                this.baseUrl,
                {task}
            );

            return this.getTodoListItems();
        } catch (error) {
            alert('Error creating todo list item');
            console.error(error);
        }
    }

    async updateTodoListItem(id, task) {
        try {
            await this.request(
                'PUT',
                `${this.baseUrl}${id}/`,
                {task}
            );

            return this.getTodoListItems();
        } catch (error) {
            alert('Error updating todo list item');
            console.error(error);
        }
    }
}

export default new TodoListService();