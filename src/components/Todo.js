import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick} 
    style={{
        textDecoration: completed ? 'underline' : 'none'
    }}
    >
        {text} 
    </li>
)

// Todo.PropTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.boolean.isRequired,
//     text: PropTypes.string.isRequired
// }

export default Todo

