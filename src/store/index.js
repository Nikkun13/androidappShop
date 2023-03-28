import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import CategoryReducer from './reducers/category.reducer'
import DicesReducer from './reducers/dices.reducer'
import CartReducer from './reducers/cart.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    dices: DicesReducer,
    cart: CartReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))