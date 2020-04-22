import React from "react";

export default class TodoForm extends React.Component{
    state = {
        text : ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            content: this.state.text,
            complete: false
        })
        // submit the form
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className={"blackFont"}
                    name={"text"}
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder={"todo..."}
                />
                <button onClick={this.handleSubmit}>add todo</button>
            </form>
        );
    }


}