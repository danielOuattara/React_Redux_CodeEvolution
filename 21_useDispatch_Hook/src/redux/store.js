
import { createStore } from 'redux';
import cakeReducer from './cakes/cakeReducer';

const store = createStore(cakeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
