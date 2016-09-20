import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../Actions';

const filterTodos = (todos = [], filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
            break;
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
            break;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
            break;
        default:
            return todos;
    }
};

const mapStateToProps = state => (
    { 
        todos : filterTodos(state.todo, state.visibilityFilter)
    }
);
const mapDispatchToProps = dispatch => (
    {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
);

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
VisibleTodoList.contextTypes = {
    store : React.PropTypes.object
}
export default VisibleTodoList;


