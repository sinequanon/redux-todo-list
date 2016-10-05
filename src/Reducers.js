import { combineReducers } from 'redux'

const INITIAL_STATE = {
     visibilityFilter : 'SHOW_ALL',
     todos : []
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'VISIBILITY_FILTER':
            return action.payload.filter
            break
        default:
            return state
    }
}

export const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [ 
                ...state,
                {
                    text: action.payload.text,
                    id: action.payload.id,
                    completed: false
                }
            ]
            break
        case 'TOGGLE_TODO':
            return state.map((todo, index) => {
                if (action.payload.index === index) {
                    return {
                        ...todo,
                        completed : !todo.completed
                    }
                }
                return todo
            })
        default:
            return state
    }
}

// const todoApp = (state = INITIAL_STATE, action) => {
//      switch (action.type) {
//           case 'VISIBILITY_FILTER':
//                visibilityFilter: visibilityFilter(state, action)
//                break
//           case 'ADD_TODO':
//           case 'TOGGLE_TODO':
//                return {
//                     ...state,
//                     todos: (state.todos, action)
//                }
//           default:
//                return  state
//      }
// }

export default combineReducers({
    visibilityFilter,
    todo
})

