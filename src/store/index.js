import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";


//dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))