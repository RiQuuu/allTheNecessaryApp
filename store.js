import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import thunk from 'redux-thunk'

const reducer = combineReducers({
 	messageReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
	console.log("store changed", store.getState())
})

export default store;