import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions';

const AddTodoComp = ({dispatch}) => (
    <div>
        <input type="text"/>
    <button onClick={ e => {
        const input = e.target.parentElement.querySelector('input');
        dispatch(addTodo(input.value));
        input.value = '';
    }}>Add</button>
    </div>
)


export default connect()(AddTodoComp);
