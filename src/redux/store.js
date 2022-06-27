import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import pizzas from './../redux/reducers/pizzaReducer'
import cart from './reducers/cartReducer'


let rootReducer = combineReducers({
    pizzas: pizzas,
    cart:cart
    
})



let store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store