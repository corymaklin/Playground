import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

class TodoList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            task: ""
        }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);       
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch({
            type: 'ADD_TODO',
            task: this.state.task
        });
        e.target.reset();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        let todos = this.props.todos.map((value, index) => <Todo task={value} key={index} />);
        return (
        <div>
            <form onSubmit={this.handleSubmit} >
                <label>Task</label>
                <input type="text" name="task" id="task" onChange={this.handleChange} />
                <button>Enter a todo</button>
            </form>
            <ul>{todos}</ul>
        </div>
        );
    }
}

function mapStateToProps(reduxState) {
    todos: { 
        reduxState.todos 
    };
}

export default connect()(TodoList);