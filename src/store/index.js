import { createStore, combineReducers } from 'redux'

import CategoryReducer from './reducers/category.reducer'
import DicesReducer from './reducers/dices.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    dices: DicesReducer
})

export default createStore(RootReducer)