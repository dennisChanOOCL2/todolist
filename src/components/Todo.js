import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';


class Todo extends Component {

    constructor(props){
        super(props);
        this.setState({
            id: props.id,
            content: props.content,
            complete: props.complete
        })

    }


    render(){
        return(
            <div
                style={{
                    textDecoration: this.props.complete ? "line-through" : ""
                }
                }
                onClick={this.props.updateTodoStatus}>
                {this.props.content}
            </div>
        )
    }


}
export default Todo;