import {Component} from "react";
import TodoListApi from "../apis/TodoListApi";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import React from "react";
import Dock from 'react-dock';


export default class TodoListContainer extends Component {

    constructor(props) {
        super(props);
        this.updateTodoStatus = this.updateTodoStatus.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            toDoList: [],
            mounting: true
        };
    }

    addTodo = (todo) => {
        let newToDoId = 0;
        if(this.state.toDoList.length == 0){
            newToDoId = Math.max.apply(Math, this.state.toDoList.map(function(todo) { return todo.id; })) + 1;
        }
        const newToDo = {
            id : newToDoId,
            content : todo.content,
            complete : todo.complete
        }
        const newToDoList = [newToDo, ...this.state.toDoList];
        this.setState(
            {
                toDoList : newToDoList
            }
        )
    }

    updateTodoStatus = (id) => {
        console.log('updateTodoStatus');
        this.setState({
            toDoList: this.state.toDoList.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }else{
                    return todo;
                }
            })
        })
    }

    componentDidMount() {
        TodoListApi.getTodoLists().then(response => {
            const toDoList = response.data;
            this.setState({toDoList: toDoList, mounting: false});
            console.log(toDoList);
        })
    }

    render() {
        if(this.state.mounting){
            return null;
        }
        return (
            <div>
                <h2 className='whiteColorTitle'>To Do Lists</h2>
                <TodoForm onSubmit={this.addTodo}/>
                <TodoList
                    toDoList = {this.state.toDoList}
                    updateTodoStatus ={this.updateTodoStatus}
                />
            </div>
        );
    }
}
