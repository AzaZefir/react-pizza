import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import pizzas from './../redux/reducers/pizzaReducer'
import cart from './reducers/cartReducer'
import filters from './reducers/filterReducer'


let rootReducer = combineReducers({
    pizzas: pizzas,
    filters: filters,
    cart:cart,
})



let store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store