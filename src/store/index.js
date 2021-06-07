import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { cartReducer } from './reducers/cartReducer'
import { productReducer } from './reducers/productReducer'


//dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    cartReducer,
    productReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
