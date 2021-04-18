import { thunk } from './middleware/thunk.js';
import { localStorage } from './middleware/localStorage.js';
import token from './user.js';
import user from './token.js';
const { createStore, combineReducers, compose, applyMiddleware } = Redux;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({ token, user });

const store = createStore(reducer, enhancer);

export default store;