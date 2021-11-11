
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    loading: false,
    users: [],
    error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

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
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
            break;

        case FETCH_USERS_FAILURE:
            state =  {
                ...state,
                loading: false,
                users : [],
                error: action.payload,
            }
            break;
    }
    return state;
}

const store = createStore(reducer);