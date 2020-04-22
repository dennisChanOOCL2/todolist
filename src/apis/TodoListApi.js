import axios from 'axios';

export default class TodoListApi {
    static getTodoLists(){
        const TodoList_API_GET_URI = "https://5e9ec500fb467500166c4658.mockapi.io/todos";
        return axios.get(TodoList_API_GET_URI);
    }

    static updateTodoList(id) {
        const TodoList_API_PUT_URI = "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + id.toString();
        return axios.get(TodoList_API_PUT_URI);
    }
}

