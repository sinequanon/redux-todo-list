let nextTodoId = 0;
export const addTodo = (text) => {
     return { type: 'ADD_TODO', payload: { id: nextTodoId++, text } };
}

export const toggleTodo = (index) => {
     return { type: 'TOGGLE_TODO', payload: { index } };
}

export const setVisibilityFilter = (filter) => {
     return { type: 'VISIBILITY_FILTER', payload : { filter } };
}
