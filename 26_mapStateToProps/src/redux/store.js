import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import { logger } from "redux-logger";


// without redux devtools
// const store = createStore(rootReducer, applyMiddleware(logger));


// with redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(logger)))

export default store;
