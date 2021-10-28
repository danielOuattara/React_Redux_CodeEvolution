
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
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCES";
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
            state =  {
                ...state,
                loading: true,
            }
            break;
            
        case FETCH_USERS_SUCCESS:
            state =  {
                // ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
            break;

        case FETCH_USERS_FAILURE:
            state =  {
                // ...state,
                loading: false,
                users : [],
                error: action.payload,
            }
            break;
    }
    return state;
}

const fetchUsers = () => {  // an action creator
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => { 
            //res.data ==> array of users
            const users = res.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users));
        })
        .catch( (error) => {
            // err.message => err description
            fetchUsersFailure(error.message);
        })
    }
}

const store = createStore(reducer , {}, applyMiddleware(thunkMiddleware));

store.subscribe( () => { console.log(store.getState())});

store.dispatch(fetchUsers);