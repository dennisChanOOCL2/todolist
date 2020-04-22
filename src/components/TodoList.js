import React, {Component} from 'react';
import Todo from "./Todo";
import TodoListApi from "../apis/TodoListApi.js";

export default class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const{toDoList, updateTodoStatus} = this.props;
        return (
            <div>
                {this.props.toDoList.map((toDo) => (
                    <Todo
                        key = {toDo.id}
                        id = {toDo.id}
                        content = {toDo.content}
                        status = {toDo.status}
                        updateTodoStatus = {updateTodoStatus}
                    />
                ))}

            </div>
        );
    }


}
