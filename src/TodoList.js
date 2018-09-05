import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

class TodoList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            task: ''
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
        this.setState({
            [e.target.name]: ''
        });
        e.target.reset();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    removeTodo(id) {
        this.props.dispatch({
            type: 'REMOVE_TODO',
            id
        });
    }

    render() {
        let todos = this.props.todos.map((value, index) => <Todo task={value.task} key={index} removeTodo={this.removeTodo.bind(this, value.id)} />);
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
    debugger
    return { 
        todos: reduxState.todos 
    };
}

export default connect(mapStateToProps)(TodoList);