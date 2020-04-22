import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
// import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';


class TodoList extends Component {

    constructor(props){
        super(props);

        this.updateTodoListStatus = this.updateTodoListStatus.bind(this);

        this.state = {
            id : this.props.id,
            content : this.props.content,
            status : this.props.status
        };
    }

    // updateTodoListStatus(e){
    //
    //     e.target.classList.toggle("strikeThrough");
    //     this.setState((prevState)=>{
    //         return {
    //             status: !prevState.status
    //         };
    //     });
    // }

    updateTodoListStatus = e => {
        e.target.classList.toggle("strikeThrough");
    };

    render(){
        return(
            <div>
                <p key ={1} onClick={this.updateTodoListStatus}>
                    HIHI123
                </p>
            </div>
        )
    }


}
export default TodoList;