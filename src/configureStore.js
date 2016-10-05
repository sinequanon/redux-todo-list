import reducers from './Reducers'
import { createStore } from 'redux'

export default () => {
     const store = createStore(reducers)

     if (module.hot) {
         console.log('reducers hot...')
         module.hot.accept('./Reducers', () => {
             const nextRootReducer = require('./Reducers')
             store.replaceReducer(nextRootReducer)
             // return true to indicate that this module is accepted and
             // there is no need to reload its parent modules
             return true
         })
     }
     return store
}
