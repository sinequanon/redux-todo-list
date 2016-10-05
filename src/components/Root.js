import React from 'react'
// import reducers from '../Reducers'
// import { addTodo, toggleTodo, setVisibilityFilter } from './Actions'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from '../configureStore'

// console.log('store.getState() : %O', store.getState())
// const unsubscribe = store.subscribe(() => {
//      console.log('store.getState() : %O', store.getState())   
// })

// store.dispatch(addTodo('make this work'))
// store.dispatch(addTodo('make this work2'))
// store.dispatch(addTodo('make this work3'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(toggleTodo(2))
// store.dispatch(setVisibilityFilter('COMPLETED'))

// unsubscribe()
// const store = createStore(reducers)

// if (module.hot) {
//     console.log('reducers hot')
//     module.hot.accept('../Reducers', () => {
//         const nextRootReducer = require('../Reducers')
//         store.replaceReducer(nextRootReducer)
//         // return true to indicate that this module is accepted and
//         // there is no need to reload its parent modules
//         return true
//     })
// }
export default () => (
    <Provider store={configureStore()}><App/></Provider>
)
