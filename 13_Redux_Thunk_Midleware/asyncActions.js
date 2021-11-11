const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios").default;

const initialState = {
    loading: false,
    users: [],
    error: '',
}


const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
            
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users : [],
                error: action.payload,
            }
    }
}

const fetchUsers = () => {  // an action creator
    return function(dispatch) {
        console.log('fetch')
        dispatch(fetchUsersRequest()); 
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => { 
            //response.data ==> array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users));
        })
        .catch( (error) => {
            // err.message => err description
            fetchUsersFailure(error.message);
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

console.log(store.dispatch)
store.subscribe( () => { console.log(store.getState())});

store.dispatch(fetchUsers);