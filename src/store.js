import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { applyMiddleware, combineReducers, createStore } from 'redux'

const reducer = combineReducers({
    notification: notificationReducer,
    anecdotes: anecdoteReducer,
    filter: filterReducer
})

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store